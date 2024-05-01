import User, { UserData } from "../models/user";
import View from "./view";

class UserForm extends View<User, UserData> {
  mapEvents(): { [key: string]: () => void } {
    return {
      "click:.set-age": () => {
        this.model.setRandomAge();
      },

      "click:.set-name": () => {
        const input = this.parent.querySelector("input");
        if (input) {
          const name = input.value;
          this.model.set({ name });
        }
      },
    };
  }

  template(): string {
    return `
      <div>
        <h1>User form</h1>
        <div>User name: ${this.model.get("name")}</div>
        <div>User age: ${this.model.get("age")}</div>
        <br />
        <input />
        <button class="set-name">Update name</button>
        <br />
        <button class="set-age">Set random age</button>
      </div>
    `;
  }
}

export default UserForm;
