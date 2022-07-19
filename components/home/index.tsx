import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { HeaderInfoState } from "../../lib/store";
import { fetchSignOut } from "../../pages/api/auth";
import { Layout } from "../layout";
import { HeaderMenu } from "../menu/HeaderMenu";
import styled from "styled-components";
import Image from "next/image";
import { PrimaryButton } from "../button";

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
        <>
          <HeaderMenu onClick={logout} />
          <Layout>
            <HomeContainer>
              <div className="profile-container">
                <div className="profile-icon">
                  <Image
                    src="/icon01.jpeg"
                    alt="プロフィール画像"
                    width={113}
                    height={113}
                  />
                </div>
                <div className="profile-description">
                  <p className="profile-name">Mary Christian</p>
                  <p className="profile-text">San Francisco / music</p>
                </div>
                <div className="profile-user-info">
                  <div className="info">
                    <p className="num">150</p>
                    <p className="label">posts</p>
                  </div>
                  <div className="info">
                    <p className="num">32</p>
                    <p className="label">followers</p>
                  </div>
                  <div className="info">
                    <p className="num">310</p>
                    <p className="label">following</p>
                  </div>
                </div>
                <div className="button-container">
                  {/* TODO: 自分自身の場合は「プロフィールを編集にラベルを変更する」 */}
                  <PrimaryButton label="Follow" onClick={() => {}} />
                </div>
              </div>
            </HomeContainer>
          </Layout>
        </>
      ) : (
        <p>ログインしていないです</p>
      )}
    </>
  );
};

const HomeContainer = styled.div`
  .profile-icon {
    text-align: center;
    img {
      border-radius: 50%;
    }
  }
  .profile-description {
    text-align: center;
    margin-top: 16px;
  }
  .profile-name {
    font-weight: bold;
    font-size: 24px;
  }
  .profile-text {
    margin-top: 8px;
    font-weight: bold;
    font-size: 12px;
  }
  .profile-user-info {
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-align: center;
    gap: 70px;
    justify-content: space-around;
  }
  .num {
    font-size: 24px;
    font-weight: bold;
  }
  .label {
    font-size: 12px;
  }
  .button-container {
    width: 300px;
    margin: 24px auto 0 auto;
  }
`;
