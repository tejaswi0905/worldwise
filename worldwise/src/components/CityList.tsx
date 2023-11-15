import styles from "./CityList.module.css";
import { cities } from "../store/atoms/cities";
import { isLoading } from "../store/atoms/isLoading";
import { useRecoilValue } from "recoil";
import { CityData } from "../types.ts/CityTypes";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList(): JSX.Element {
  const loading = useRecoilValue(isLoading);
  const citiesList = useRecoilValue(cities);
  if (loading) {
    return (
      <>
        <Spinner></Spinner>
      </>
    );
  }
  if (citiesList.length === 0) {
    return (
      <Message message="Add your first city by clicking on a city on the map"></Message>
    );
  }
  return (
    <ul className={styles.cityList}>
      {citiesList.map((city: CityData): JSX.Element => {
        return <CityItem city={city} key={city.id}></CityItem>;
      })}
    </ul>
  );
}

export default CityList;
