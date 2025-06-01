import { useState, type FC, type JSX } from "react";
import { AuthContext } from "./authContext";

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [user, setUser] = useState<string>("");

  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
};
