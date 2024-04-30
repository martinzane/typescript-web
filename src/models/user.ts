import Eventing from "./eventing";
import Sync from "./sync";

export interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = "http://localhost:3000/users";

class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserData> = new Sync(ROOT_URL);

  constructor(private data: UserData) {}

  public get(propName: string): string | number {
    return this.data[propName];
  }

  public set(data: UserData): void {
    Object.assign(this.data, data);
  }
}

export default User;
