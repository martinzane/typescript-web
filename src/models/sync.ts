import axios, { AxiosPromise } from "axios";
import { UserData } from "./user";

class Sync {
  constructor(public rootUrl: string) {}

  public fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  public save(data: UserData): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}

export default Sync;
