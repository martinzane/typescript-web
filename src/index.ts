import User from "./models/user";

const user = new User({ name: "Mark", age: 35 });

user.on("change", () => console.log("Change"));
