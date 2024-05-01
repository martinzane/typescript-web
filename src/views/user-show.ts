import User, { UserData } from "../models/user";
import View from "./view";

class UserShow extends View<User, UserData> {
  template(): string {
    return `
    <div>
      <h1>User details</h1>
      <div>Name: ${this.model.get("name")}
      <div>Age: ${this.model.get("age")}
    </div>
    `;
  }
}

export default UserShow;
