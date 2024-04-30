import Attributes from "./attributes";
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
  public attributes: Attributes<UserData>;

  constructor(public data: UserData) {
    this.attributes = new Attributes(data);
  }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }
}

export default User;
