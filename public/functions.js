"use strict";
let greet;
greet = () => {
    console.log("hello");
};
//c is optional with a ? question mark
//default value = 10 or 
//required params a, b always go first and optional go at the end
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
//typescript infers the type
//for bigger functions we can put that the return should be a number
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 5);
