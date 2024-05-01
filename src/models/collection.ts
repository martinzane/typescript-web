import axios, { AxiosResponse } from "axios";
import Eventing from "./eventing";

class Collection<T, K> {
  public models: T[] = [];
  public events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  public get on() {
    return this.events.on;
  }

  public get trigger() {
    return this.events.trigger;
  }

  public fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((data: K) => {
        this.models.push(this.deserialize(data));
      });

      this.trigger("change");
    });
  }
}

export default Collection;
