"use strict";
document.querySelector("input[value='Register']").onclick = function() {
	//Lấy thông tin của từng field của form
	//email :
    var txtEmail = document.querySelector('input[name="email"]').value;
	//Phone
	var txtPhone = document.querySelector('input[name="phone"]').value;
	//Country
	var txtCountry = document.querySelector('select').value;
	//contact by me:
	var txtContact = "";

	var contactMe = document.querySelectorAll('input[name="radioContact"]');

	for (var i = 0; i < contactMe.length; i++) {
		if (contactMe[i].checked == true) {
			txtContact = contactMe[i].value;
			break;
		}
	}

	//Term of service
	var termOfService = document.querySelector('input[name="termOfService"]').checked;
	var resultTerm = (termOfService==true)? "Đồng ý" : "Không đồng ý";

	if (txtEmail == "" || txtPhone == "" || txtCountry == "" || txtContact == "") {
        alert("Bạn cần nhập đầy đủ thông tin");
		return;
	}

	var indexRow = document.querySelectorAll("#tbl__infor tbody tr").length;
	
	var html = `<tr>
			<td>${indexRow + 1}</td>
			<td>${txtEmail}</td>
			<td>${txtPhone}</td>
			<td>${txtCountry}</td>
			<td>${txtContact}</td>
			<th>${resultTerm}</th>
		</tr>`;
    
	document.querySelector("#tbl__infor tbody").innerHTML += html;
}
