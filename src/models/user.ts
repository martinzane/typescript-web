interface UserData {
  name: string;
  age: number;
}

class User {
  constructor(private data: UserData) {}

  public get(propName: string): string | number {
    return this.data[propName];
  }
}

export default User;
