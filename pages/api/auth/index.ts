import axios from "axios";
import { HeaderInfo, SignInUser } from "../../../types";

// ログイン
export async function fetchSignIn(params: SignInUser): Promise<any> {
  const res = await axios.post("http://127.0.0.1:3000/auth/sign_in", params);
  return res;
}
// 新規登録
