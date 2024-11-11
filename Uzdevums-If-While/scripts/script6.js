let n = 1;
let test_veseli_skaitli1 = "";
//let test_veseli_skaitli1 = [];

while (n < 31) {
  test_veseli_skaitli1 = test_veseli_skaitli1 + n;
if (n < 30) test_veseli_skaitli1 = test_veseli_skaitli1 + ",";
n++
}

document.getElementById("vesels_skaitli").innerHTML = `Visi veseli skaitļi: ${test_veseli_skaitli1}`;


