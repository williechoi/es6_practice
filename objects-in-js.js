const user = { name: "ellie", age: 20 };
const user2 = user;

user2.name = "hyungsuk";
console.log(`user value: ${user.name}`);
console.log(`user2 value: ${user2.name}`);

const user3 = Object.assign({}, user);
user3.name = "Jungmin";
console.log(user);
console.log(`user value: ${user.name}`);
console.log(`user3 value: ${user3.name}`);
