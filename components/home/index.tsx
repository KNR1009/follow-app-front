import React from "react";
import { useRecoilValue } from "recoil";
import { HeaderInfoState } from "../../lib/store";
import HeaderMenu from "../menu/HeaderMenu";

export const Home: React.FC = () => {
  const Header = useRecoilValue(HeaderInfoState);

  return (
    <>{Header.accessToken ? <HeaderMenu /> : <p>ログインしていないです</p>}</>
  );
};
