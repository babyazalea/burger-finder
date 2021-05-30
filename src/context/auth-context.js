import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  isVerified: false,
  login: () => {},
  googleLogin: () => {},
  updateProfile: () => {},
  logout: () => {},
  test: () => {},
});
