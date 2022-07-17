export type SignInUser = {
  email: string;
  password: string;
};

export type SignUpUser = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type HeaderInfo = {
  accessToken: string;
  client: string;
  uid: string;
};
