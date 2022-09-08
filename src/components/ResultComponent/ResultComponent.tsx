import { inject, observer } from "mobx-react";
import Cards from "../Cards/Cards";
import styles from "./ResultComponent.module.scss";
import TimeZone from "../TimeZone/TimeZone";

interface IResultComponent {
  store?: any;
}

const ResultComponent = inject("store")(
  observer(({ store }: IResultComponent) => {
    const { result } = store;
    const { main, sys, timezone, wind, weather } = result;
    return (
      <div className={styles.cardParent}>
        <Cards
          weather={weather}
          data={main?.temp}
          label="Temperature"
          unit="° C"
        />
        <Cards data={wind?.speed} label="Wind" unit="km/h" icon="bi bi-wind" />
        <Cards
          data={main?.humidity}
          label="Humidity"
          unit="%"
          icon="bi bi-droplet"
        />
        <Cards
          data={main?.pressure}
          label="Pressure"
          unit="hPa"
          icon="bi bi-water"
        />

        <Cards
          data={<TimeZone input={sys?.sunrise} timezone={timezone} />}
          label="Sun Rise"
          icon="bi bi-sunrise"
        />
        <Cards
          data={<TimeZone input={sys?.sunset} timezone={timezone} />}
          label="Sun Set"
          icon="bi bi-sunset"
        />
      </div>
    );
  })
);

export default ResultComponent;
