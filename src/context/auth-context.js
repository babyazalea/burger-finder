import { createContext } from "react";

export const AuthContext = createContext({
  isLoading: false,
  isLoggedIn: false,
  error: null,
  token: null,
  userId: null,
  userName: null,
  isVerified: false,
  login: () => {},
  googleLogin: () => {},
  updateProfile: () => {},
  sendPasswordReset: () => {},
  logout: () => {},
  test: () => {},
});
