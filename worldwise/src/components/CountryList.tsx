import { useRecoilValue } from "recoil";

import { CityData } from "../types.ts/CityTypes";

import { isLoading } from "../store/atoms/isLoading";
import { cities } from "../store/atoms/cities";

import styles from "./CountryList.module.css";

import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList(): JSX.Element {
  const citiesList: CityData[] = useRecoilValue(cities);
  const loading: boolean = useRecoilValue(isLoading);

  if (!citiesList.length) {
    return (
      <Message message="Add your fist city by clicking on a city on the map"></Message>
    );
  }

  const uniqueCountriesObj = citiesList.reduce((acc: any, city: any): any => {
    if (
      !acc
        .map((el: any): any => {
          return el.country;
        })
        .includes(city.country)
    ) {
      return [...acc, city];
    } else {
      return acc;
    }
  }, []);

  const uniqueCountriesArr = uniqueCountriesObj.map((el: any): any => {
    return el.country;
  });

  if (loading) {
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }
  return (
    <div>
      <ul className={styles.countryList}>
        {uniqueCountriesArr.map((country: any): JSX.Element => {
          return <CountryItem country={country} key={country}></CountryItem>;
        })}
      </ul>
    </div>
  );
}

export default CountryList;
