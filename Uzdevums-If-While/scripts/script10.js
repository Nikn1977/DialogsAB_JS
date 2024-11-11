let n4 = 1;
let test_veseli_par_skaitli4 = "";
let neattelots4 = "";


while (n4 < 31) {
      if (n4 % 2 === 0){ 
        if (n4 !=12 && n4 !=14 && n4 !=16 && n4 !=18) {
          test_veseli_par_skaitli4 = test_veseli_par_skaitli4 + n4;
          if (n4 < 29) {
            test_veseli_par_skaitli4 = test_veseli_par_skaitli4 + ",";
          }
        }
        else {neattelots4 = neattelots4 + n4 + ",";}
      }
     n4++;
}
document.getElementById("vesels_par_skaitli4").innerHTML = `Veseli paru skaitļi: ${test_veseli_par_skaitli4} <br> Neattelots: ${neattelots4} `;

