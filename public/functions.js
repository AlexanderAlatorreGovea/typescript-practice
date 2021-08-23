"use strict";
var greet;
greet = function () {
    console.log("hello");
};
//c is optional with a ? question mark
//default value = 10 or 
//required params a, b always go first and optional go at the end
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10);
//typescript infers the type
//for bigger functions we can put that the return should be a number
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 5);
