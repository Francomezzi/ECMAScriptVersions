//flat
const array = [2,3,4,5,12,4,2421,[1,3,4,[332,43,12]]];
console.log(array.flat(3));

//Flat map
const array2 = [3,23,4,54];
console.log(array2.flatMap(v => [v,v * 2]));