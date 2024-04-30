import User from "./models/user";

const user = new User({ name: "Phil", age: 40 });

user.events.on("change", () => {
  console.log("Change!");
});

user.events.trigger("change");
