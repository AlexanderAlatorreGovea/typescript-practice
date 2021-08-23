(() => {
  const character = "mario";
  let age = 30;
  let isBlackBelt = false;

  const circ = (diameter: number) => {
    return diameter * Math.PI;
  };
})();

//arrays
//types defined inside the array cannot add different types
//if typescript detects an array with strings and nums etc it will allow you to
//change the array
(() => {
  const names = ["luigi", "mario", "yoshi"];
  names.push("toad");

  const numbers = [1, 3, 3];
  numbers.push(33);

  const mixed = ["ken", 4, "chun-li", 9, 9];
  mixed.push("ryu");
  mixed.push(10);
  mixed[0] = 3;
})();

//objects
//if we declare a property to be a type, it cannot change to another property
//gets an error if the properties are not assigned
// values can be different, cannot add another property because it doesn't
//match the structure of the initial object
(() => {
  const ninja = {
    name: "mario",
    belt: "black",
    age: 30,
  };

  ninja.age = 40;
  ninja.name = "ryu";
})();

(() => {
  let character: string;
  let age: number;
  let isLoggedIn: Boolean;

  age = 30;
  isLoggedIn = true;
})();

//arrays
(() => {
  let ninjas: string[] = [];
  function pushArg(...args: string[]) {
    ninjas = [...args];
  }
  pushArg("mario", "joshie");
})();

//union types
//unions allow to add pipes of types that the function accepts
(() => {
  let mixed: (string | number | boolean)[] = [];

  mixed.push("hello");
  mixed.push(20);

  let uid: string | number;
  uid = "123";
  uid = 23;
  console.log(uid);
})();

//objects
(() => {
  let ninjaOne: object;
  ninjaOne = {
    name: "joshi",
    age: 30,
  };

  //the type should be an object
  //and the three properties should a string age and beltColour
  let ninjatwo: {
    name: string;
    age: number;
    beltColour: string;
  };

  ninjatwo = {
    name: "alex",
    age: 30,
    beltColour: "black",
  };
})();

//any type
//this allows you to change the type
(() => {
  let age: any = 25;
  age = true;
  age = "hello";

  let mixed: any[] = [];
  mixed.push("mario");
  mixed.push(false);
  console.log(mixed);
})();

(() => {
  let ninj: {
    name: string;
    age: any;
  };

  ninj = {
    name: "yoshi",
    age: 25,
  };
})(); 

console.log('compiling...')