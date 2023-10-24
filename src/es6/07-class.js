//Declarando
class User{};
//Instancia de una clase
//const newUser = new User();

class user{
    //Metodos
    greeting(){
        return "Hola";
    }
};

const gndx = new user();
console.log(gndx.greeting());

//Constructor 

 class usuario{
    constructor(){
        console.log("New user");
    }
    greeting(){
        return "hola";
    }
 }

 const franco = new usuario();

 // this

 class loco{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    speak(){
        return "Hello";
    }

    greeting(){
        return `Hello ${this.name}`;
    }
 }

 const franc = new loco("franco",23,"Ctes");
 console.log(franc);
 console.log(franc.greeting());

//setters y getters

class ashe{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return "hola";
    }

    greeting(){
        return `Hello ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}

const frc = new ashe("Franco",15);
console.log(frc.uAge);
console.log(frc.uAge = 20);
