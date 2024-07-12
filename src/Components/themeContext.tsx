import * as React from "react";

export function useTheme() {
  const [theme, setTheme] = React.useState<string | "light">(
    localStorage.getItem("theme") ?? "light",
  );
  function setToDark(): void {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }

  function setToLight(): void {
    localStorage.setItem("theme", "light");
    setTheme("light");
  }
  return { theme, setToLight, setToDark };
}
