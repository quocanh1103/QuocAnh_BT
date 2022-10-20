function Employee(name, basic_salary, reward, fine) {
    this.name = name;
    this.basic_salary = basic_salary;
    this.reward = reward;
    this.fine = fine;
  }

  function cal_Salary(user){
    basic_salary = parseInt(user.basic_salary);
    reward       = parseInt(user.reward);
    fine         = parseInt(user.fine);
    return (basic_salary + reward - fine);
  }

  var arr_employees = [];

  document.getElementById('add').onclick = (e) => {
    e.preventDefault();
    name        = document.getElementById('row_name').value.trim();
    salary_inp  = document.getElementById('row_salary').value.trim().replace(/\D/g,'');
    reward_inp = document.getElementById('row_reward').value.trim().replace(/\D/g,'');
    fine_inp    = document.getElementById('row_fine').value.trim().replace(/\D/g,'');

    let employee = new Employee(name, salary_inp, reward_inp, fine_inp);
    arr_employees.push(employee);

    sortSalaryDes(arr_employees);
    console.log(arr_employees);
    renderEmployInfo();
  }

  function renderEmployInfo() {
    var html = "";
    document.querySelector('#tblData tbody').innerHTML = "";
    arr_employees.forEach((data, index) => {
      html += `<tr>
                <td>${data.name}</td>
                <td>${data.basic_salary}</td>
                <td>${data.reward}</td>
                <td>${data.fine}</td>
                <td>${cal_Salary(data)}</td>
              </tr>`
    });
    document.querySelector('#tblData tbody').innerHTML += html;
}

  function sortSalaryDes(arr){
    let new_arr = arr.sort(function(a, b){return cal_Salary(b) - cal_Salary(a)});
    return new_arr;
  }

function countSalaryThanAThousand() {
    count = 0;
    arr_employees.forEach((data, index) => {
      if(cal_Salary(data) > 1000){
        count += 1;
      }
    });
    return count;
  }