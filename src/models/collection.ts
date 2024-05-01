import axios, { AxiosResponse } from "axios";
import Eventing from "./eventing";
import User, { UserData } from "./user";

class Collection {
  public models: User[] = [];
  public events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  public get on() {
    return this.events.on;
  }

  public get trigger() {
    return this.events.trigger;
  }

  public fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((data: UserData) => {
        const user = User.createUser(data);
        this.models.push(user);
      });

      this.trigger('change')
    });
  }
}

export default Collection;
