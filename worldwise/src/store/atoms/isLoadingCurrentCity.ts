import { atom } from "recoil";

export const isLoadingCurrentCity = atom<boolean>({
  key: "isLoadingCurrentCity",
  default: false,
});
