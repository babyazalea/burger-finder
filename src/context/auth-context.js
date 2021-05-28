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
  authWithEmailAndPassword: () => {},
  signInToFirebase: () => {},
  emailVerification: () => {},
  updateProfile: () => {},
  sendPasswordReset: () => {},
  logout: () => {},
});
