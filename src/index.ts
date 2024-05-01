import Collection from "./models/collection";
import User, { UserData } from "./models/user";
import UserList from "./views/user-list";

const ROOT_URL = "http://localhost:3000/users";

const users = new Collection(ROOT_URL, (data: UserData) => {
  return User.createUser(data);
});

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
