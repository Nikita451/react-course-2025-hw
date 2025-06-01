import { createContext } from "react";

interface AuthContextProp {
  user: string;
  setUser: (user: string) => void;
}

export const TEST_USER = "vasya";

export const AuthContext = createContext<AuthContextProp>({
  user: "",
  setUser: () => {},
});
