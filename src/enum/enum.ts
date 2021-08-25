//with the T it will know about the properties that were
//sent by the object
//whatever is passed int shoudl be an object
() => {
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
  enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }

  const docThree: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: {
      name: "shaun",
    },
  };

  const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: ["test", "bread", "milk"],
  };

  console.log(docThree, docFour);
};
