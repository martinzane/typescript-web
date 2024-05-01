import Model from "./model";
import Attributes from "./attributes";
import Eventing from "./eventing";
import ApiSync from "./api-sync";
import Collection from "./collection";

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = "http://localhost:3000/users";

class User extends Model<UserData> {
  static createUser(data: UserData): User {
    return new User(
      new Attributes<UserData>(data),
      new Eventing(),
      new ApiSync<UserData>(ROOT_URL)
    );
  }

  static createCollection(): Collection<User, UserData> {
    return new Collection<User, UserData>(ROOT_URL, (json: UserData) =>
      User.createUser(json)
    );
  }

  public setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}

export default User;
