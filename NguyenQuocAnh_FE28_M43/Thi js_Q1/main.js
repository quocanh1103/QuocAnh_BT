document.getElementById('submit').onclick = (e) => {
    e.preventDefault();
    input = parseInt(document.getElementById('row_sale').value.trim().replace(/\D/g, ''), 10);

    let sale = input;
    let salary = 0;
    let tax = 0;
    if (sale < 5000) {
        salary = (sale * 5) / 100;
    } else if (sale > 10000) {
        salary = (sale * 15) / 100;
    } else {
        salary = (sale * 10) / 100;
    }

    let total = salary;
    if (salary >= 1000) {
        tax = 10;
        total = salary - (salary * (tax / 100));
    }

    document.getElementById('row_salary').value = salary.toLocaleString();
    document.getElementById('row_tax').value = tax.toLocaleString() + "%";
    document.getElementById('row_total').value = total.toLocaleString();
}