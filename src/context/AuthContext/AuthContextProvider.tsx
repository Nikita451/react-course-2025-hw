"use client";
import { useState, type FC, type JSX } from "react";
import { AuthContext } from "./authContext";

export const AuthContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [user, setUser] = useState({ isAuthorized: false, name: "" });

  function toggleAuth() {
    setUser((user) => {
      return user.isAuthorized
        ? { isAuthorized: false, name: "" }
        : { isAuthorized: true, name: "Vasya" };
    });
  }

  return <AuthContext value={{ user, toggleAuth }}>{children}</AuthContext>;
};
