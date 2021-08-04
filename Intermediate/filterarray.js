// var testArray=[2,4,6,8,5,9,10,12];
// console.log(testArray.fill("h",4,6));

const mynumber=[2,3,6,8,9,10,45,89];
const result=mynumber.filter((num)=> num!=45);

//console.log(result);


//console.log(mynumber.slice(1,4));
mynumber.splice(1,3,"Rabiul");
console.log(mynumber);
