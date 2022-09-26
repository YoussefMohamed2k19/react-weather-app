import { inject, observer } from "mobx-react";

interface Store {
  loaderState: {
    isLoading: boolean;
    status: boolean;
  };
  dataState: {
    cityName: string;
    result: any;
  };
}

interface ILoaderComponent {
  store?: Store;
}

const LoaderComponent = inject("store")(
  observer(({ store }: ILoaderComponent) => {
    let { loaderState, dataState } = store!;
    let { isLoading, status } = loaderState;
    let { cityName, result } = dataState;
    const { name, sys } = result;

    return (
      <h5 className="text-center text-capitalize">
        {/* make a flow chart here later on */}
        {cityName === ""
          ? "Search for a city"
          : isLoading
          ? "loading, please wait...."
          : status
          ? `${name}, ${sys?.country}`
          : "City not found"}
      </h5>
    );
  })
);

export default LoaderComponent;
