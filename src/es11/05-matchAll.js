const regex = /\b(Apple)+\b/g;

const fruit = "Apple,banana,hola, julio";

for(const match of fruit.matchAll(regex)){
    console.log(match)
};