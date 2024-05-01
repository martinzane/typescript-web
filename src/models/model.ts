import { AxiosPromise } from "axios";

type Callback = () => void;

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

class Model {}

export default Model;
