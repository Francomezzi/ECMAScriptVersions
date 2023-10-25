async function* anotherGN(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGN();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Gello");

async function arrayOfNames(arr){
    for await(let value of arr){
        console.log(value);
    }
}

const names = arrayOfNames(["Juan","Lol","sadasd","Juans32"]);
console.log("After");