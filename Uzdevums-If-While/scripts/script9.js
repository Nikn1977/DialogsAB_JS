let n3 = 1;
let test_veseli_nepar_skaitli3 = "";
let neattelots3 = "";

while (n3 < 31) {
  if (n3 % 2 === 1) {
    if (n3 != 5  && n3 != 11) {
      test_veseli_nepar_skaitli3 = test_veseli_nepar_skaitli3 + n3;
      if (n3 < 29) {
        test_veseli_nepar_skaitli3 = test_veseli_nepar_skaitli3 + ",";
      }
    }
    else {neattelots3 = neattelots3 + n3 + ",";}
  }
  n3++;
}
document.getElementById("vesels_nepar_skaitli3").innerHTML = `Veseli neparu skaitļi: ${test_veseli_nepar_skaitli3} <br> Neattelots: ${neattelots3}`;


