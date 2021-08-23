type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} say hello`);
};
