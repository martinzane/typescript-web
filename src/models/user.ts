import axios, { AxiosResponse } from "axios";

interface UserData {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

interface Event {
  [key: string]: Callback[];
}

class User {
  private events: Event = {};

  constructor(private data: UserData) {}

  public get(propName: string): string | number {
    return this.data[propName];
  }

  public set(data: UserData): void {
    Object.assign(this.data, data);
  }

  public on(event: string, callback: Callback): void {
    const handlers = this.events[event] || [];
    handlers.push(callback);
    this.events[event] = handlers;
  }

  public trigger(event: string): void {
    const handlers = this.events[event];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => callback());
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
