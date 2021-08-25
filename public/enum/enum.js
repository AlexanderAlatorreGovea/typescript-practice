"use strict";
//with the T it will know about the properties that were
//sent by the object
//whatever is passed int shoudl be an object
() => {
    const addUID = (obj) => {
        let uid = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { uid });
    };
    let docOne = addUID({
        name: "yoshi",
        age: 40,
    });
    console.log(docOne.name);
    //T is something that will be referenced later on
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["FILM"] = 2] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
        ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    })(ResourceType || (ResourceType = {}));
    const docThree = {
        uid: 1,
        resourceName: ResourceType.AUTHOR,
        data: {
            name: "shaun",
        },
    };
    const docFour = {
        uid: 2,
        resourceName: ResourceType.BOOK,
        data: ["test", "bread", "milk"],
    };
    console.log(docThree, docFour);
};
