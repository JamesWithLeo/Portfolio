import * as React from "react";

const ThemeContext = React.createContext(null)

export const useTheme = () => {
  
  const [theme, setTheme] = React.useState<'dark'|'light'>(localStorage.theme ?? 'light');

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
