import User from "./models/user";

const user = new User({ name: "Mark", age: 35 });

console.log(user.get("name"));
console.log(user.get("age"));
