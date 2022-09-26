import {
  configure,
  action,
  observable,
  makeAutoObservable,
  reaction,
} from "mobx";
import { fetchData } from "../../Functions/fetchData";

configure({
  enforceActions: "always",
});

export class DataState {
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
  @observable result: any = [];

  @action
  changeCityName = (data: string) => (this.cityName = data);

  @action
  setResult = (data: []) => (this.result = data);
}
