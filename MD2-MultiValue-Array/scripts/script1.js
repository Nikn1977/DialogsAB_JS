function count(a,c,d,...spisok){ // tātad, trīs punkti un turpmāk izmantojamais identifikators jeb vārds
  console.log(typeof(a),a);
  console.log(typeof(c),c);
  console.log(typeof(d),d);
  console.log(typeof(spisok),spisok.length); // vēl īsti nevar tikt pie masīva vērtībām
  
  
  if (spisok.length > 0) {
   console.log(spisok);

   let n3 = 1;
   let test_veseli_nepar_skaitli3 = "";
   let neattelots3 = "";

   while (n3 < 31) {
    if (n3 % 2 === 1) {
      if (spisok.includes(`${n3}`) == false) {  
            test_veseli_nepar_skaitli3 = test_veseli_nepar_skaitli3 + n3;
            console.log(n3);
        }
      else {neattelots3 = neattelots3 + n3 + ",";}
    }}
    n3++;
  }
 
   
  
  return document.getElementById("vesels_nepar_skaitli3").innerHTML = `Veseli neparu skaitļi: ${neattelots3}` ;
}



count(1,30,"odd",5,11);





