function count(Nsak,Nbeig,Kas) {
  test_veseli_skaitli11 = "";
                        if (Kas == "all") {
                             while (Nsak < Nbeig) 
                        {test_veseli_skaitli11 = test_veseli_skaitli11 + Nsak + ",";
                          Nsak++; }
                          return document.getElementById("func_6").innerHTML = `Veseli neparu skaitļi: ${test_veseli_skaitli11}`;
                          console.log("all");
                        }else if (Kas == "odd"){
                          while (Nsak < Nbeig)
                              {if (Nsak % 2 === 1) 
                                {test_veseli_skaitli11 = test_veseli_skaitli11 + Nsak + ",";
                                }
                                  Nsak++;
                                                              }
                              console.log("odd");
                          return document.getElementById("func_7").innerHTML = `Veseli neparu skaitļi: ${test_veseli_skaitli11}`;
                        }else if (Kas == "even"){
                          while (Nsak < Nbeig)
                              {if (Nsak % 2 === 0)
                                {test_veseli_skaitli11 = test_veseli_skaitli11 + Nsak + ",";
                                }
                                  Nsak++;
                                                              }
                              console.log("even");
                        return document.getElementById("func_8").innerHTML = `Veseli neparu skaitļi: ${test_veseli_skaitli11}`;
                        }
}


function count2(a,c,d,...spisok){ // tātad, trīs punkti un turpmāk izmantojamais identifikators jeb vārds
  console.log(typeof(a),a);
  console.log(typeof(c),c);
  console.log(typeof(d),d);
  console.log(typeof(spisok),spisok.length); // vēl īsti nevar tikt pie masīva vērtībām
  
  let n3 = a;
  let test_9 = "";
  let neattelots9 = "";
  let test_10 = "";
  let neattelots10 = "";
  
  

    if (d == "odd")  {
      while (n3 < c) {
      if (n3 % 2 === 1) {
      if (spisok.includes(n3) == false) {  
            test_9 = test_9 + n3 +",";
            console.log(n3);
           }
      else {
        neattelots9 = neattelots9 + n3 + ",";
         }
       }
       n3++;
      }
      return document.getElementById("func_9").innerHTML = `Veseli neparu skaitļi: ${test_9} <br> Neatteloti skaitli:  ${neattelots9}`;
    }
      else if (d == "even")  {
        while (n3 < c) {
        if (n3 % 2 === 0) {
          if (spisok.includes(n3) == false) {  
                test_10 = test_10 + n3 +",";
                console.log(n3);
               }
          else {
            neattelots10 = neattelots10 + n3 + ",";
             }
           }
           n3++;
          }
          return document.getElementById("func_10").innerHTML = `Veseli neparu skaitļi: ${test_10} <br> Neatteloti skaitli:  ${neattelots10}`;         
  }   
  
}



count(1,30,"all");
count(1,30,"odd");
count(1,30,"even");
count2(1,30,"odd",5,11);
count2(1,30,"even",2,4,8,16);



