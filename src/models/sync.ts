import axios, { AxiosPromise } from "axios";

interface Data {
  id?: number;
}
class Sync<T extends Data> {
  constructor(public rootUrl: string) {}

  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}

export default Sync;
