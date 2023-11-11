import { atom } from "recoil";
import { CityData } from "../../types.ts/CityTypes";

export const cities = atom<CityData[]>({
  key: "cities",
  default: [],
});
