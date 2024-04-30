import Eventing from "./eventing";

export interface UserData {
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
}

export default User;
