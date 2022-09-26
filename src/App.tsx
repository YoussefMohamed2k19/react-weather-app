import { inject, observer } from "mobx-react";
import Header from "./components/Header/Header";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
import ResultComponent from "./components/ResultComponent/ResultComponent";
import SearchBar from "./components/SearchBar/SearchBar";

interface Store {
  dataState: {
    result: any;
  };
}

interface IApp {
  store?: Store;
}

const App = inject("store")(
  observer(({ store }: IApp) => {
    let { dataState } = store!;
    let { result } = dataState;
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
