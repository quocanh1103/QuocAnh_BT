"use strict";
//Create an integer array with 10 elements and the fill the data for this array : Tài
	var myArray = [ 3 ,5 , 2 , 6 , 7, 8, 10, 1 ,9 ,4];
//Write a function to print all member of array to screen : Huỳnh Đức
	function printElement(){
		for( var i = 0; i <= myArray.length; i++){
			console.log(myArray[i]);
		}
	}
//Write a function to permit user enter a value and find this is exits in array or not. : Hậu
function findElement() {
	    var e = prompt("nhap vao:");
		var isExit = myArray.indexOf(parseInt(e));
		// for (let i = 0; i < myArray.length; i++) {
		// 	if(myArray[i] == e){
		// 		isExit= true;
		// 	}
		// }
		if(isExit > -1){
			console.log("co");
		}else{
			console.log("khong");
		}
}
//Write a function to find the maximum value in this array. : Minh
var findMax = function() {
	var max = myArray[0];
	for (let i = 0; i < myArray.length; i++) {
		(max < myArray[i]) ? max = myArray[i] : max = max;
	}
	console.log("max:"+max);
}
//Write a function to calculate sum of all elements of array. : Nhân
let sum = 0;
function sumArr() {
	// for(let i = 0; i < myArray.length; i++) {
	// 	sum += myArray[i];
	// }
	sum = myArray.reduce(function(acc, cur) {return acc += cur;}, 0)
	console.log(sum);
}
//Write a function to sort all elements of array by descending : Quốc Anh
	function descending() {
		myArray.sort(function(a,b){
			return b-a
		});
		console.log(myArray);
	}
//Write a function to add element to array, with value input by user : Lâm
function addElement() {
	var myInput = prompt('gia tr nguoi dung')
	myArray.push(myInput);
	console.log(myArray.join())	
}
//Write a function to delete element, with index value input by user : Đức (cao)
function deLete () {
	var n = Number(prompt('Nhap vi tri can xoa'));
	var x = Number(prompt('Nhap so phan tu can xoa'));
	var dele = myArray.splice(n,x);
	document.write(` vi tri can xoa la: ${n} </br>`)
	document.write(`so phan tu can xoa: ${x} </br>`)
	document.write(`phan tu bi xoa: ${dele}`)
	console.log(myArray);
}
//Write a function to update value element, with index value input by user : Ngân
function updateElement() {
	var n = (prompt('Nhap vi tri can thay'));
	var y=parseInt(prompt('Nhap gia tri moi'));
	if(n<myArray.length){
		// myArray.splice(n,1,y);
		myArray[parseInt(n)-1] = y;
	} else {alert("vi tri ko ton")}
	console.log(myArray);
}
// Setup a ment to permit user eneter a number to select to run a function. : Huy

var a = prompt("nhap so:\n 1: in mang \n 2: tim phan tu\n 3: tim Max\n 4: tinh tong \n 5: mang giam dan \n 6: them phan tu\n 7: xoa phan tu\n update phan tu ");

switch (a) {
	case "1": printElement(); break;
	case "2": findElement(); break;
	case "3": findMax(); break;
	case "4": sumArr(); break;
	case "5": descending(); break;
	case "6": addElement(); break;
	case "7": deLete(); break;
	case "8": updateElement(); break;
	default:
	    break;
}