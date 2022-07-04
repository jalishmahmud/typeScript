"use strict";
let m;
m = 20;
console.log(m);
let f = [];
let p;
const myFunc = (a, b, c, d = "Hello") => {
    // console.log(d + a, b);
    // return  undefined in JS if nothing return which is a value
    // return  void in TS if nothing return which is nothing
    return a + b;
};
myFunc("A", "B");
