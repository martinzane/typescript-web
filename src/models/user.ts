import Model from "./model";

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = "http://localhost:3000/users";

class User extends Model<UserData> {}

export default User;
