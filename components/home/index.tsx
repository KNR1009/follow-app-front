import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { HeaderInfoState } from "../../lib/store";
import { fetchSignOut } from "../../pages/api/auth";
import { HeaderMenu } from "../menu/HeaderMenu";

export const Home: React.FC = () => {
  const router = useRouter();

  const [Header, setHeader] = useRecoilState(HeaderInfoState);

  // ログアウト
  const logout = async () => {
    const res = await fetchSignOut(Header);
    setHeader({
      accessToken: "",
      client: "",
      uid: "",
    });
    alert("ログアウト完了しました");
  };
  useEffect(() => {
    if (Header.accessToken === "") {
      router.push("/auth/signIn");
    }
  }, [Header.accessToken, router]);
  return (
    <>
      {Header.accessToken ? (
        <HeaderMenu onClick={logout} />
      ) : (
        <p>ログインしていないです</p>
      )}
    </>
  );
};
