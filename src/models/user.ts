import { AxiosResponse } from "axios";
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

  public get on() {
    return this.events.on;
  }
  public get trigger() {
    return this.events.trigger;
  }
  public get get() {
    return this.attributes.get;
  }

  public set(data: UserData): void {
    this.attributes.set(data);
    this.events.trigger("change");
  }

  public fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  public save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}

export default User;
