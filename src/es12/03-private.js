class ashe{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return "hola";
    }

    greeting(){
        return `Hello ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
}

const frc = new ashe("Franco",15);
console.log(frc.uAge);
console.log(frc.uAge = 20);
