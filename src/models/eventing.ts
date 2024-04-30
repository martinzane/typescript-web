interface Event {
  [key: string]: Callback[];
}

type Callback = () => void;

class Eventing {
  private events: Event = {};

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

export default Eventing;
