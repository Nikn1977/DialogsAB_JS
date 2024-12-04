//https://www.w3schools.com/js/js_object_display.asp

const person = {
  name: "John",
  age: 30,
  city: "New York",
  yearOfBirth: function(){return 2024 - this.age;}
};
//document.getElementById("demo").innerHTML = person
//document.getElementById("demo").innerHTML = person.name;
//document.getElementById("demo").innerHTML =person.name + "," + person.age + "," + person.city;
//document.getElementById("demo").innerHTML =person["name"] + "," + person.age + "," + person["city"]

// Build a Text
 let text = "";

//console.log("Testa rindas saturs pirms cikla for: "+text);
for (let x in person) {
  //console.log(x);
  text += person[x] + " "; // text = text + person[x] + " ";
  //console.log(text);
}
//console.log("Testa rindas saturs pec cikla for: "+text);
document.getElementById("demo").innerHTML = text; 


const values_of_prop_of_person = Object.values(person);
for (let x of values_of_prop_of_person){
  //console.log(x);
  text += x + " ";
  //console.log(text);
}
//console.log("Testa rindas saturs pec cikla for: "+text);
document.getElementById("demo2").innerHTML = text;


const names_and_values_of_prop_of_person = Object.entries(person);
for (let [x, y] of names_and_values_of_prop_of_person){
  //console.log(x+": "+y);
  //console.log(x+": "+person[x])
  //  text += y + " (this value of "+ x +" property) ";
  
  text += y + " ";
  //console.log(text);
}
//console.log("Testa rindas saturs pec cikla for: "+text);

//text = JSON.stringify(person);

document.getElementById("demo3").innerHTML = text;


