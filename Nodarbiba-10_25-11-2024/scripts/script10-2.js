//https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_constructor

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Latvian";
}


//const myFather = new Person(firsName: "John", lastName: "Doe", age: 70, eye: "blue");
const myFather = new Person("Slavik", "Nikn", 70, "blue");
myFather.nationality = "Russian";
document.getElementById("demo").innerHTML = JSON.stringify(myFather);

//const myFather = new Person(firsName: "Irina", lastName: "Nikna", age: 65, eye: "green");
const myMother = new Person("Irina", "Nikna", 65, "green");
document.getElementById("demo2").innerHTML = JSON.stringify(myMother);

//const myFather = new Person(firsName: "Anna", lastName: "Hill", age: 45, eye: "green");
const myBrother = new Person("Maks", "Nikn", 35, "grey");
document.getElementById("demo3").innerHTML = JSON.stringify(myBrother);

