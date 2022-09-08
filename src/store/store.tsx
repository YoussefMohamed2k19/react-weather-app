import { observable, makeAutoObservable, action, reaction } from "mobx";
import { fetchData } from "../Functions/fetchData";

export class Store {
  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.cityName,
      (x) => {
        fetchData(x, this.setResult, this.setStatus, this.setIsLoading);
      }
    );
  }
  @observable cityName: string = "";
  @observable result: object[] = [];
  @observable isLoading: boolean = false;
  @observable status: boolean = true;

  @action
  changeCityName = (data: string) => (this.cityName = data);

  @action
  setResult = (data: object[]) => (this.result = data);

  @action
  setIsLoading = (data: boolean) => (this.isLoading = data);

  @action
  setStatus = (data: boolean) => (this.status = data);
}

export const store = new Store();
