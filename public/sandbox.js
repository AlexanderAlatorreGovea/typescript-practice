var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
(function () {
  var character = "mario";
  var age = 30;
  var isBlackBelt = false;
  var circ = function (diameter) {
    return diameter * Math.PI;
  };
})();
//arrays
//types defined inside the array cannot add different types
//if typescript detects an array with strings and nums etc it will allow you to
//change the array
(function () {
  var names = ["luigi", "mario", "yoshi"];
  names.push("toad");
  var numbers = [1, 3, 3];
  numbers.push(33);
  var mixed = ["ken", 4, "chun-li", 9, 9];
  mixed.push("ryu");
  mixed.push(10);
  mixed[0] = 3;
})();
//objects
//if we declare a property to be a type, it cannot change to another property
//gets an error if the properties are not assigned
// values can be different, cannot add another property because it doesn't
//match the structure of the initial object
(function () {
  var ninja = {
    name: "mario",
    belt: "black",
    age: 30,
  };
  ninja.age = 40;
  ninja.name = "ryu";
})();
(function () {
  var character;
  var age;
  var isLoggedIn;
  age = 30;
  isLoggedIn = true;
})();
//arrays
(function () {
  var ninjas = [];
  function pushArg() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    ninjas = __spreadArray([], args);
  }
  pushArg("mario", "joshie");
})();
//union types
//unions allow to add pipes of types that the function accepts
(function () {
  var mixed = [];
  mixed.push("hello");
  mixed.push(20);
  var uid;
  uid = "123";
  uid = 23;
  console.log(uid);
})();
//objects
(function () {
  var ninjaOne;
  ninjaOne = {
    name: "joshi",
    age: 30,
  };
  //the type should be an object
  //and the three properties should a string age and beltColour
  var ninjatwo;
  ninjatwo = {
    name: "alex",
    age: 30,
    beltColour: "black",
  };
})();
//any type
//this allows you to change the type
(function () {
  var age = 25;
  age = true;
  age = "hello";
  var mixed = [];
  mixed.push("mario");
  mixed.push(false);
  console.log(mixed);
})();
(function () {
  var ninj;
  ninj = {
    name: "yoshi",
    age: 25,
  };
})();
