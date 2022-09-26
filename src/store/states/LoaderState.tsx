import { configure, action, observable, makeAutoObservable } from "mobx";

configure({
  enforceActions: "always",
});

export class LoaderState {
  constructor() {
    makeAutoObservable(this);
  }
  @observable isLoading: boolean = false;
  @observable status: boolean = true;

  @action
  setIsLoading = (data: boolean) => (this.isLoading = data);

  @action
  setStatus = (data: boolean) => (this.status = data);
}
