import { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;

export interface ModelData {
  id?: number;
}

interface ModelAttributes<T> {
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
  set(data: T): void;
}

interface ModelSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface ModelEvents {
  on(event: string, callback: Callback): void;
  trigger(event: string): void;
}

class Model<T extends ModelData> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: ModelEvents,
    private sync: ModelSync<T>
  ) {}

  public on = this.events.on;
  public trigger = this.events.trigger;
  public get = this.attributes.get;

  public set(data: T): void {
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

export default Model;
