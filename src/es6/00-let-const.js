var lastName = "David";
lastName = "Juan";
console.log(lastName);

let fruit = "Apple";
fruit = "lol";
console.log(fruit);

//No se puede reasignar
const ashe = "loli";
ashe = "uh";
console.log(ashe);

const fruits = () =>{
    if(true){
        var fruit1 = "apple"; //function scope
        let fruit2 = "hola"; // block scope
        const fruit3 = "Shu"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();