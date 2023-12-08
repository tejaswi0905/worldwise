import { useSetRecoilState } from "recoil";

import { currentCity } from "../store/atoms/currentCity";
import { isLoadingCurrentCity } from "../store/atoms/isLoadingCurrentCity";

const BASE_URL: string = "http://localhost:3000";

export const useCityDetails = () => {
  const setCurrentCity = useSetRecoilState(currentCity);
  const setIsLoadingCurrentCity = useSetRecoilState(isLoadingCurrentCity);

  const fetchCity = async (cityId: string | undefined) => {
    try {
      setIsLoadingCurrentCity(true);
      const res = await fetch(`${BASE_URL}/cities/${cityId}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert(
        `There is an error while loading the data of city with ID:- ${cityId}`
      );
    } finally {
      setIsLoadingCurrentCity(false);
    }
  };

  return fetchCity;
};
