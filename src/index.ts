import User from "./models/user";

const user = new User({ name: "Phil", age: 40 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("User was changed!");
});

user.set({ name: "Roy" });
