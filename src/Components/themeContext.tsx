import * as React from "react";

type themeType = {
  theme: string;
  setToDark: () => void;
  setToLight: () => void;
} | null;
export const ThemeContext = React.createContext<themeType>(null);

export const useTheme = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    localStorage.theme ?? "light",
  );
  document.getElementById("root").className = theme;

  function setToDark(): void {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }

  function setToLight(): void {
    localStorage.setItem("theme", "light");
    setTheme("light");
  }
  return { theme, setToLight, setToDark };
};
export function ThemeProvider({ children }) {
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function ThemeConsumer() {
  return React.useContext(ThemeContext);
}
