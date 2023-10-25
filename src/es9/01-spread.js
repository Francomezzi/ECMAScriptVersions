const user = { username: "Ashe",age:23,country:"Co"};
const {username,...values} = user;

console.log(username);
console.log(values);