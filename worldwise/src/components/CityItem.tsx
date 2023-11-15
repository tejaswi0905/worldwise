import { Link } from "react-router-dom";
import { CityData } from "../types.ts/CityTypes";
import styles from "./CityItem.module.css";

const formatDate = (date: any) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

type CityItemProp = {
  city: CityData;
};

function CityItem({ city }: CityItemProp): JSX.Element {
  return (
    <li>
      <Link className={styles.cityItem} to={`${city.id}`}>
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
