"use strict";
//with the T it will know about the properties that were
//sent by the object
//whatever is passed int shoudl be an object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({
    name: "yoshi",
    age: 40,
});
console.log(docOne.name);
//everything between <> will be passed up as an argument to Resource
//<T> will allow us to pass up the data of an object if we
//don't know what the data will look like yet
const docThree = {
    uid: 1,
    resourceName: "person",
    data: {
        name: "shaun",
    },
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["test", "bread", "milk"],
};
console.log(docThree, docFour);
