let n1 = 1;
let test_veseli_nepar_skaitli1 = "";


while (n1 < 31) {
      if (n1 % 2 === 1) { test_veseli_nepar_skaitli1 = test_veseli_nepar_skaitli1 + n1;
      if (n1 < 29) test_veseli_nepar_skaitli1 = test_veseli_nepar_skaitli1 + ",";}
     n1++;
}
document.getElementById("vesels_nepar_skaitli").innerHTML = `Veseli neparu skaitļi: ${test_veseli_nepar_skaitli1}`;


