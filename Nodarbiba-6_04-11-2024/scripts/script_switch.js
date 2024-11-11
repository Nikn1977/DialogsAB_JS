/*
switch(analizejama_izteiksme) {
  case analizejamas_izteiksmes_iespejamais_stavoklis_1:
      darbiba_1;
  case analizejamas_izteiksmes_iespejamais_stavoklis_2:
      darbiba_2;
      break;
case analizejamas_izteiksmes_iespejamais_stavoklis_3:
case analizejamas_izteiksmes_iespejamais_stavoklis_4:
      darbiba_3_4;
      break;
default:
      darbibas_defaultgadijuma; 

}

*/

// ja analizejama_izteiksme ir stavoklis 1, tad
// tiks izpilditsas darbibas_1 un darbibas_2 (NB! pilda lidz break;)
//ja, piemeram, pec darbibas_3_4 nebutu break; tad izpilde gan darbibas_3_4 gan Default:

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo_switch").innerHTML = "Today is: " + day;

