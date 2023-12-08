import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { cities } from "../store/atoms/cities";
import { isLoading } from "../store/atoms/isLoading";

const BASE_URL: string = "http://localhost:3000";

function FetchCities(): JSX.Element {
  const setCities = useSetRecoilState(cities);
  const setIsLoading = useSetRecoilState(isLoading);

  async function fetchCities() {
    try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();

      setCities(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCities();
  }, []);

  console.log(useRecoilValue(isLoading));

  return <></>;
}

export default FetchCities;
