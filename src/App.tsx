import { inject, observer } from "mobx-react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
import ResultComponent from "./components/ResultComponent/ResultComponent";
import SearchBar from "./components/SearchBar/SearchBar";

interface IApp {
  store?: any;
}

const App = inject("store")(
  observer(({ store }: IApp) => {
    let { result } = store;
    return (
      <div className="App">
        <Header header="weather app" />
        <SearchBar />
        <LoaderComponent />
        {result.length !== 0 && <ResultComponent />}
      </div>
    );
  })
);

export default App;
