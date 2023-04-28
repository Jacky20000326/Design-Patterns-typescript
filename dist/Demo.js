"use strict";
let obj = {
    name: 'Jacky',
    age: 23,
    gender: 'male'
};
let a = 1;
let b = 0;
a && (a = 3);
b !== null && b !== void 0 ? b : (b = 3);
console.log(a);
console.log(b);
let result = Object.entries(obj);
console.log(result);
