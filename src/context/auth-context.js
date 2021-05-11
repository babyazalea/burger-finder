import { createContext } from "react";

export const AuthContext = createContext({
  isLoading: false,
  isLoggedIn: false,
  userId: null,
  userName: null,
  isVerified: false,
  authWithEmailAndPassword: () => {},
  signInToFirebase: () => {},
  logout: () => {},
});
