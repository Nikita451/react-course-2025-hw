import { createContext } from "react";

export interface AuthUser {
  name: string;
  isAuthorized: boolean;
}

interface AuthContextProp {
  user: AuthUser;
  toggleAuth: () => void;
}

export const TEST_USER = "vasya";

export const AuthContext = createContext<AuthContextProp>({
  user: { name: "", isAuthorized: false },
  toggleAuth: () => {},
});
