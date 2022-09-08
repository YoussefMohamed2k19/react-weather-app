import { inject, observer } from "mobx-react";
import { useRef } from "react";

interface ISearchBar {
  store?: any;
}

const SearchBar = inject("store")(
  observer(({ store }: ISearchBar) => {
    const { changeCityName } = store;
    const inputField = useRef<HTMLInputElement | null>(null);
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeCityName(inputField.current?.value);
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
