import { createContext } from "react";

export const AuthContext = createContext({
  isLoading: false,
  isLoggedIn: false,
  token: null,
  userId: null,
  userName: null,
  isVerified: false,
  login: () => {},
  googleLogin: () => {},
  updateProfile: () => {},
  logout: () => {},
  test: () => {},
});
