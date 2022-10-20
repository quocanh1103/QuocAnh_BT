// bài 2:
alert('xin chao')
var fullname = prompt('Tên');
var age = prompt('Tuổi');
alert('Anh + 23');
var goods = prompt('Số lượng đơn hàng 1');
goods = parseInt(goods);
alert(goods - 1);
var goods = prompt('Số lượng đơn hàng 2');
goods = parseInt(goods);
alert(goods + 1);
// bài 3:
var a = prompt('Nhập số a :');
a = parseFloat(a);
var b = prompt('Nhập số b :');
b = parseFloat(b);
var c = prompt('Nhập số c :');
c = parseFloat(c);
if (a == 0) {
    if (b == 0) {
        if (c == 0)
            alert('phương trình vô số nghiệm');
        else
            alert('vô nghiệm')
    } else
        var x1 = -c / b;
    x1 = parseFloat(x1);
    alert('nghiệm x của phương trình là :' + x1)
} else {
    var delta = b * b - 4 * a * c;
    delta = parseFloat(delta);
    if (delta == 0) {
        var x2 = -b / (2 * a);
        x2 = parseFloat(x2);
        alert('phương trình có nghiệm kép x= ' + x2);
    }
    else if (delta > 0) {
        var x3 = (-b + Math.sqrt(delta)) / (2 * a);
        x3 = parseFloat(x3);
        var x4 = (-b - Math.sqrt(delta)) / (2 * a);
        x4 = parseFloat(x4);
        // alert('Phương trình có 2 nghiệm x= ' + x3);
        alert('Phương trình có 2 nghiệm x lần lượt la: ' + x3 + x4);
    }
    else {
        alert('phương trình vô nghiệm');
    }
}









