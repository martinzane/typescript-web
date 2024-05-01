import User from "./models/user";

const user = User.createUser({ id: 2 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
