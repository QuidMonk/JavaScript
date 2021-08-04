var countries=["India","USA","Nepal","Singapore"];

var states=new Array("Delhi","Goa","Jharkhand","Bihar");

// console.log(states[2]);
// console.log(countries.length);

countries[2]="Russia";
console.log(countries);

countries.unshift("Pakistan");
//console.log(countries);

countries.shift();
//console.log(countries);

console.log(countries.indexOf("Russia")); 