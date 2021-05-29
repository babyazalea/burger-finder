import { createContext } from "react";

export const AuthContext = createContext({
  isLoading: false,
  isLoggedIn: false,
  error: null,
  token: null,
  userId: null,
  userName: null,
  sendedVerification: false,
  isVerified: false,
  initializeError: () => {},
  login: () => {},
  googleLogin: () => {},
  emailVerification: () => {},
  updateProfile: () => {},
  sendPasswordReset: () => {},
  logout: () => {},
  test: () => {},
});
