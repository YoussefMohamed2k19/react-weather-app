import { observable, makeAutoObservable, action, reaction } from "mobx";
import { fetchData } from "../Functions/fetchData";

export class Store {
  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.cityName,
      async (x) => {
        this.setResult([]);
        let results = await fetchData(x);
        if (results !== undefined) {
          this.setResult(results);
        }
      }
    );
  }
  @observable cityName: string = "";
  @observable result: [] = [];
  @observable isLoading: boolean = false;
  @observable status: boolean = true;

  @action
  changeCityName = (data: string) => (this.cityName = data);

  @action
  setResult = (data: []) => (this.result = data);

  @action
  setIsLoading = (data: boolean) => (this.isLoading = data);

  @action
  setStatus = (data: boolean) => (this.status = data);
}

export const store = new Store();
