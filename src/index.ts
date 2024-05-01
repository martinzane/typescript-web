import User from "./models/user";

const user = new User({ id: 2, name: "Roy", age: 25 });

user.on("save", () => {
  console.log(user);
});

user.save();
