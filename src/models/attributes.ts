class Attributes<T> {
  constructor(private data: T) {}

  public get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  public set(data: T): void {
    Object.assign(this.data, data);
  }
}

export default Attributes;
