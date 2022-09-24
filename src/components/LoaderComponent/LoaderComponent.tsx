import React from "react";
import { inject, observer } from "mobx-react";

interface ILoaderComponent {
  store?: any;
}

const LoaderComponent = inject("store")(
  observer(({ store }: ILoaderComponent) => {
    const { isLoading, status, cityName, result } = store;
    const { name, sys } = result || [];

    // console.log(JSON.parse(JSON.stringify(result)));
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
