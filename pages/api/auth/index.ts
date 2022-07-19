import axios from "axios";
import { HeaderInfo, SignInUser } from "../../../types";

// ログイン
export async function fetchSignIn(params: SignInUser): Promise<any> {
  const res = await axios.post("http://127.0.0.1:3000/auth/sign_in", params);
  return res;
}
// ログアウト
export async function fetchSignOut(Header: HeaderInfo): Promise<any> {
  const res = await axios.delete("http://127.0.0.1:3000/auth/sign_out", {
    headers: {
      "access-token": Header.accessToken,
      client: Header.client,
      uid: Header.uid,
    },
  });
  return res;
}
