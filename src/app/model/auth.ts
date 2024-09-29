export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface ConfirmUserData {
  username: string;
  code: string;
}

export interface SignInData {
  username: string;
  password: string;
}
