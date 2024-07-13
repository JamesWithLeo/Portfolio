import * as React from "react";

const ThemeContext = React.createContext(null)

export const useTheme = () => {
  let currentTheme = localStorage.getItem("theme") ?? "light";
  const [theme, setTheme] = React.useState<string>(currentTheme);

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
export function ThemeProvider({children}){
  const theme = useTheme()
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}


export function ThemeConsumer(){
  return React.useContext(ThemeContext)
}
