import { createContext } from "react";

export const DEFAULT_THEME = "light";
export const DARK_THEME = "dark";

interface ThemeContextProp {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProp>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});
