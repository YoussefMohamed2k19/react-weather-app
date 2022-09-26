import { inject, observer } from "mobx-react";
import { useRef } from "react";

interface Store {
  dataState: {
    changeCityName: Function;
  };
}

interface ISearchBar {
  store?: Store;
}

const SearchBar = inject("store")(
  observer(({ store }: ISearchBar) => {
    const { dataState } = store!;
    let { changeCityName } = dataState;
    const inputField = useRef<HTMLInputElement | null>(null);
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeCityName(inputField.current?.value!);
        }}
      >
        <input
          ref={inputField}
          type="text"
          className="form-control my-3"
          placeholder="search ......"
        />
      </form>
    );
  })
);

export default SearchBar;
