import { atom } from "recoil";
import { CityData } from "../../types.ts/CityTypes";

export const currentCity = atom<CityData | null>({
  key: "currentCity",
  default: null,
});
