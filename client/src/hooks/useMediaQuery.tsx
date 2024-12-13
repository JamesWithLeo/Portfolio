import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (e) => {
      setMatches(e.matches);
    };
    mediaQueryList.addEventListener("change", handleChange);
    setMatches(mediaQueryList.matches);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
