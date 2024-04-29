import User from "./models/user";

const user = new User({ name: "Mark", age: 35 });

user.set({ name: "Milo", age: 28 });

console.log(user.get("name"));
console.log(user.get("age"));
