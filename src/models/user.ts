interface UserData {
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
}

export default User;
