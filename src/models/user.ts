import Model from "./model";
import Attributes from "./attributes";
import Eventing from "./eventing";
import ApiSync from "./api-sync";

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
}

export default User;
