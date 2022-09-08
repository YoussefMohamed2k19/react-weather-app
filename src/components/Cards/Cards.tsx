import styles from "./Cards.module.scss";

interface ICards {
  weather?: object[];
  data: JSX.Element | string | number;
  label: string;
  unit?: string;
  icon?: string;
}

const Cards = ({ weather, data, label, unit, icon }: ICards) => {
  return (
    <div className={styles.itemCard}>
      {weather ? (
        <img
          src={`http://openweathermap.org/img/wn/${weather
            ?.filter((x: any, y: number) => y === 0)
            ?.map((x: any) => x.icon)}@2x.png`}
          alt=""
        />
      ) : (
        <i className={`fs-2 ${icon}`}></i>
      )}
      <span className="fs-6 fw-bold">
        {data} {unit}
      </span>
      <span className="fw-lighter text-secondary">{label}</span>
    </div>
  );
};

export default Cards;
