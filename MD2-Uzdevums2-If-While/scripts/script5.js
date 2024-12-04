// https://www.geeksforgeeks.org/sorting-in-array/

// 1. masīva aizpildīšana ("hard" dati)
var a = 1, b = 10, c = 3, d = 7;

// let test_augosa_sec3 = [1,10,3,7];
let test_augosa_sec3 = [a,b,c,d];

document.getElementById("augosa_sec3").innerText = "Masīvs pirms kārtošanas: "+test_augosa_sec3;

skatitajs = 0;
N = test_augosa_sec3.length;
for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < N - 1 - i; j++) {    
   // console.log(j, test_augosa_sec3[j], j + 1, test_augosa_sec3[j + 1], test_augosa_sec3[j] < test_augosa_sec3[j + 1]);
    skatitajs++;
    if (test_augosa_sec3[j] > test_augosa_sec3[j + 1]) {
      temp = test_augosa_sec3[j];
      test_augosa_sec3[j] = test_augosa_sec3[j + 1];
      test_augosa_sec3[j + 1] = temp;
      console.log("Ir veiktas izmaiņas: ", test_augosa_sec3);
    }
  }
}

document.getElementById("augosa_sec3").innerHTML = document.getElementById("augosa_sec3").innerText + "<br> Masīvs pēc kārtošanas: "+ test_augosa_sec3 + "<br>";

//let dati = [1, 2, 5, 7, -89, 74, 0, 4];
//document.getElementById("demo").innerText = "Masīvs pirms kārtošanas: "+ dati;
// dati.length -> 8 (N) => 7 (N-1) salīdzināšanas pa pāriem
// [(1[0] , 2[1]) , 5 , 7, -89, 74, 0, 4] -> neko nedaram
// [1 , (2[1] , 5[2]) , 7, -89, 74, 0, 4] -> neko nedaram
// [1 , 2 , (5[2] , 7[3]), -89, 74, 0, 4] -> neko nedaram
// [1 , 2 , 5 , (7[3], -89[4]), 74, 0, 4] -> jāveic izmaiņas [1 , 2 , 5 , (-89[3]], 7[4]), 74, 0, 4]
// [1 , 2 , 5 , -89, (7[4], 74[5]), 0, 4] -> neko nedaram
// [1 , 2 , 5 , -89, 7, (74[5], 0[6]), 4] -> jāveic izmaiņas [1 , 2 , 5 , -89, 7, (0[5], 74[6]), 4]
// [1 , 2 , 5 , -89, 7, 0, (74[6], 4[7])] -> jāveic izmaiņas [1 , 2 , 5 , -89, 7, 0, (4[6], 74[7])]
// -------------------------- 1. "lielā" iterācija ir pabeigta
// -------------------------- pēc šis iterācijas vislielākais burbulis ir beigās

// var atkal veikt N-1 salīdzināšanu pa pāriem, bet var 1 salidzināšanu "ieekonomēt" (jo pats pēdējais jau ir vislielākais)
// [(1[0] , 2[1]) , 5 , -89, 7, 0, 4, 74]

