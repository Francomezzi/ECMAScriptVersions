function* iterate(array){
    for(let value of array){
        yield value;
    }   
}

const it = iterate(["Franc","asHE","loco","uli","ssasel"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);