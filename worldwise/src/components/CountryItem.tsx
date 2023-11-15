import styles from "./CountryItem.module.css";

type CountryType = {
  country: string;
};

function CountryItem({ country }: CountryType): JSX.Element {
  return (
    <li className={styles.countryItem}>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
