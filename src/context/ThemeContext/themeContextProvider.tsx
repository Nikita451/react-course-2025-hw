"use client";
import { type FC, type JSX, useState } from "react";
import { DEFAULT_THEME, ThemeContext } from "./themeContext";

export const ThemeContextProvider: FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
