var arrData = [];

window.onload = function () {
	arrData = localStorage.getItem("BTArray") ? JSON.parse(localStorage.getItem("BTArray")) : [];
	genderTable();
}

function getDateCreate() {
	return new Date().toLocaleString();
}

function genderTable() {
	var html = '';
	document.querySelector('#tblData tbody').innerHTML = '';
	arrData.forEach(function (data, index) {
		data.index = index;
		html += `<tr>
					<td>${data.index}</td>
					<td>${data.value}</td>
					<td>${data.dateCreate}</td>
				</tr>`;
	});
	document.querySelector('#tblData tbody').innerHTML += html;
}

function genderEvent(typeEvent, elemnt, callback) {
	document.querySelector(elemnt).addEventListener(typeEvent, function (event) {
		callback(event);
	})
}

//Event 
//Add element
genderEvent('click', '#btnAdd', function () {
	//Lay thong tin element va push vao array
	var txtInfoElem = document.querySelector('.row_item input[type="text"]').value;
	if (txtInfoElem == "") {
		return;
	}
	var dataRow = {
		index: 0,
		value: txtInfoElem,
		dateCreate: getDateCreate()
	}
	arrData.push(dataRow);
	//Gender data table
	genderTable();
	document.querySelector('.row_item input[type="text"]').value = "";
	localStorage.setItem("BTArray", JSON.stringify(arrData));
});

//Delete element
genderEvent('click', '#btnDelete', function () {
	//Lay vi tri can xoa
	var txtPosition = parseInt(document.querySelector('.row_item input[type="number"]').value);
	//Kiem tra tinh hop lecua data
	if (txtPosition < 0 || (txtPosition > arrData.length - 1)) {
		alert('Khong ton tai vi tri can xoa');
		return;
	}
	//Delete element
	arrData.splice(txtPosition, 1);
	//Gender data table
	genderTable();
	document.querySelector('.row_item input[type="number"]').value = "";
});

//Format element
genderEvent('click', '#btnFormat', function () {
	if (arrData.length == 0) {
		alert("Hãy thêm giá trị vào array");
		return;
	}
	var objData = arrData.reduce(function (acc, cur) {
		var objTemp = {
			index: cur.index,
			value: cur.value
		}
		// var temp2 = cur; 
		// var dateCreate = temp2.dateCreate
		// delete temp2.dateCreate;
		return { ...acc, [cur.dateCreate]: objTemp };
	}, {});
	document.querySelector('#areaData').innerHTML = JSON.stringify(objData);
});

//Event enter Thêm vào
genderEvent('keyup', '.row_item input[type="text"]', function (e) {
	if (e.keyCode == 13) {
		document.querySelector('#btnAdd').click();
	}
})
//Event enter xóa đi
genderEvent('keyup', '.row_item input[type="number"]', function (e) {
	if (e.keyCode == 13) {
		document.querySelector('#btnDelete').click();
	}
})
