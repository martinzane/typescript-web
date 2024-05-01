import User from "./models/user";
import UserForm from "./views/user-form";

const root = document.getElementById("root");
const user = User.createUser({ name: "Eric", age: 18 });

if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error("Root element not found.");
}
