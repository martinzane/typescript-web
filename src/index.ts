import User from "./models/user";
import UserEdit from "./views/user-edit";

const root = document.getElementById("root");
const user = User.createUser({ name: "Eric", age: 18 });

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found.");
}
