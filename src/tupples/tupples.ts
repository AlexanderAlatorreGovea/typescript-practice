//with the T it will know about the properties that were
//sent by the object
//whatever is passed int shoudl be an object
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({
  name: "yoshi",
  age: 40,
});

console.log(docOne.name);

//T is something that will be referenced later on
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

//everything between <> will be passed up as an argument to Resource
//<T> will allow us to pass up the data of an object if we
//don't know what the data will look like yet
const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: {
    name: "shaun",
  },
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["test", "bread", "milk"],
};

console.log(docThree, docFour);
