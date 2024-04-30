import axios, { AxiosResponse } from "axios";
import Eventing from "./eventing";

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserData) {}

  public get(propName: string): string | number {
    return this.data[propName];
  }

  public set(data: UserData): void {
    Object.assign(this.data, data);
  }

  public fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  public save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}

export default User;
