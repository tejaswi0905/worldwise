import { cities } from "../atoms/cities";
import { selector } from "recoil";

import { CityData } from "../../types.ts/CityTypes";

export const cityData = selector<CityData[]>({
  key: "CityDataArray",
  get: ({ get }) => {
    const cityData = get(cities);
    return cityData;
  },
});
