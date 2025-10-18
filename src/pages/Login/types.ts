export type UserInfo = {
  name: string;
  email: string;
  picture: string;
}

export type AuthState = {
  user: UserInfo | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}