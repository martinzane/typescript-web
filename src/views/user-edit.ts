import User, { UserData } from "../models/user";
import View from "./view";

class UserEdit extends View<User, UserData> {
  public mapRegions(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}

export default UserEdit;
