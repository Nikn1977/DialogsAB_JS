function count(Nsak,Nbeig,Kas) {
  test_veseli_skaitli11 = "";
  if (Kas == "all") {
                    while (Nsak < Nbeig) 
                        {test_veseli_skaitli11 = test_veseli_skaitli11 + Nsak + ",";
                          Nsak++; }
                          return document.getElementById("func_vesels_skaitli_6").innerHTML = `Veseli neparu skaitļi: ${test_veseli_skaitli11}`;
                          console.log("all");
                        }else if (Kas == "odd"){
                          while (Nsak < Nbeig)
                              {if (Nsak % 2 === 1) 
                                {test_veseli_skaitli11 = test_veseli_skaitli11 + Nsak + ",";
                                }
                                  Nsak++;
                                                              }
                              console.log("odd");
                          return document.getElementById("func_vesels_skaitli_7").innerHTML = `Veseli neparu skaitļi: ${test_veseli_skaitli11}`;
                        }else if (Kas == "even"){
                          while (Nsak < Nbeig)
                              {if (Nsak % 2 === 0)
                                {test_veseli_skaitli11 = test_veseli_skaitli11 + Nsak + ",";
                                }
                                  Nsak++;
                                                              }
                              console.log("even");
                        return document.getElementById("func_vesels_skaitli_8").innerHTML = `Veseli neparu skaitļi: ${test_veseli_skaitli11}`;
                        }
                      

}


count(1,30,"all");
count(1,30,"odd");
count(1,30,"even");

/*function view2(Nsak2,Nbeig2,Kas2,exclud){
  Return exclud[];
}

view2(1,30,"odd",[5,11]);*/





