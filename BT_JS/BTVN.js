var array = new Array();
function handleArray(action) {
	console.log(action);
  if(action == "add"){
    let value = document.getElementById("add").value;
    addArray(value);
  }else{
    let value = document.getElementById("del").value;
    delArray(value);
  }
  reload_data_into_table();
}

function addArray(value){
  array.push([value, getDate()]);
}
function delArray(value){
  var index = array.indexOf(value);
  console.log(value);
  if (index !== -1) {
    array.splice(index, 1);
  }else {
    alert("Khong tim thay value!!")
  }
}

function getDate(){
  let date = new Date();
  return date.toLocaleString();
}

function reload_data_into_table(){
  var body = document.getElementById('tbody');
  body.innerHTML = `<tr>
  <td>Alfreds Futterkiste</td>
  <td>Maria Anders</td>
  <td>Germany</td>
</tr>`
  console.log(body);
  console.log(array);
}
window.onload = function(){
  reload_data_into_table();
}