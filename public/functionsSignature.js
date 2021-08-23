"use strict";
//let greet: Function;
(function () {
    //example 1
    var greet;
    greet = function (name, greeting) {
        console.log("" + name);
    };
    //example 2
    var calc;
    calc = function (numOne, numTwo, action) {
        if (action === "add") {
            return numOne + numTwo;
        }
        else {
            return numTwo - numTwo;
        }
    };
    //example 3
})();
