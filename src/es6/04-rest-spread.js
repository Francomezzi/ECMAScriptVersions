//Arrays destructuring

let fruits = ["appes","ssss","loca"];
let [a,b] = fruits;
console.log(a,b);
console.log(fruits[1]);

//Object destructuring

let user = {
    username: "Franco",
    age: 23
};
let { username,age} = user;
console.log(username,age);

//Spread operator 

let person = {
    name: "Juan",
    age: 23
};
let country  = "arg";

let data = {id:1, ...person, country};
console.log(data);

//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(7,1,9,3,2,4);

