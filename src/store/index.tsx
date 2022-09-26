import { LoaderState } from "./states/LoaderState";
import { DataState } from "./states/DataState";

export class Store {
  loaderState: LoaderState;
  dataState: DataState;
  constructor() {
    this.loaderState = new LoaderState();
    this.dataState = new DataState();
  }
}

export const store = new Store();
