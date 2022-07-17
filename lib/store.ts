import { atom, RecoilState } from "recoil";
import { HeaderInfo } from "../types";

export const HeaderInfoState: RecoilState<HeaderInfo> = atom({
  key: "headerInfo",
  default: {
    accessToken: "",
    client: "",
    uid: "",
  },
});
