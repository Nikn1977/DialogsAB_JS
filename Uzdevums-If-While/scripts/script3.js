var a = 1,
  b = 10,
  c = 3,
  A = a,
  B = b,
  C = c;

if (a > b) {
  a = a + b;
  b = a - b;
  a = a - b;
  //          console.log(`A un B maina: a=${a} and b=${b}`);
}

if (a > c) {
  a = a + c;
  c = a - c;
  a = a - c;
  // console.log(`A un C maina: a=${b} and c=${c}`);
}

if (b > c) {
  b = b + c;
  c = b - c;
  b = b - c;
  //        console.log(`B un C maina: b=${b} and c=${c}`);
}

//     console.log(`a=${a} and b=${b} and c=${c}`);

let test_augosa_sec2 = [a, b, c];
document.getElementById("augosa_sec2").innerHTML = `Pirms kārtošanas: a = ${A}, b = ${B}, c = ${C} <br>Augoša seciba ar 3 mainigaiem - ${test_augosa_sec2}<br>`;
