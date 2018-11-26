// let student = ["richard", "peter", "bruce", "barry", "hajji"];
// student.forEach(function (std) {
//
//
//     },
//     console.log(`${name} is ${age} years old`)
//
//
// function add() {
//     let button = document.getElementById("add");
//     let name = document.getElementById("num1").value;
//     let age = document.getElementById("num2").value;
//
//
// }
let myarray=[
    { name: "Raul", age: 27 },
    { name: "Jose", age: 55 },
    { name: "Maria", age: 52 },
    { name: "Jesus", age: 18 },
    { name: "Neo", age: 2 },

]
let newarray=myarray.filter(user=>user.age>18);
let fullArray=myarray.filter(function (user) {
    if (user.again < 18)
    {
        return user
    }

});
console.log(myarray);
let users=[...myarray];
 users.push(   { name: "Jose", age: 55 },);
 console.log(myarray);