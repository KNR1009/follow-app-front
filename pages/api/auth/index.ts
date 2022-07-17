import axios from "axios";
import { SignInUser } from "../../../types";

// ログイン
export const fetchSignIn = async (params: SignInUser) => {
  axios.post("http://127.0.0.1:3000/auth/sign_in", params).then((res) => {});
};
// 新規登録
