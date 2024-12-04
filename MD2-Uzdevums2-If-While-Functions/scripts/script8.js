let n2 = 1;
let test_veseli_par_skaitli = "";


while (n2 < 31) {
      if (n2 % 2 === 0){ test_veseli_par_skaitli = test_veseli_par_skaitli + n2;
      if (n2 < 29) test_veseli_par_skaitli = test_veseli_par_skaitli + ",";}
     n2++;
}
document.getElementById("vesels_par_skaitli").innerHTML = `Veseli paru skaitļi: ${test_veseli_par_skaitli}`;


