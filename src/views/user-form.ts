import User, { UserData } from "../models/user";
import View from "./view";

class UserForm extends View<User, UserData> {
  mapEvents(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.handleSetAge,
      "click:.set-name": this.handleSetName,
      "click:.save": this.handleSave,
    };
  }

  handleSetAge = () => {
    this.model.setRandomAge();
  };
  handleSetName = () => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  handleSave = () => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}" />
        <button class="set-name">Update name</button>
        <button class="set-age">Set random age</button>
        <button class="save">Save</button>
      </div>
    `;
  }
}

export default UserForm;
