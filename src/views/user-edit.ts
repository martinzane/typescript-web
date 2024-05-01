import User, { UserData } from "../models/user";
import UserShow from "./user-show";
import UserForm from "./user-form";
import View from "./view";

class UserEdit extends View<User, UserData> {
  public mapRegions(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
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
