import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as faDarkbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeConsumer } from "../themeContext";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Header() {
  const theme = ThemeConsumer();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 1; // Adjust this value based on where the transition should happen
      setIsSticky(window.scrollY > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${isSticky ? "shadow-md backdrop-blur-sm sm:sticky" : "sm:absolute"} sticky  top-0 z-20 flex h-16 w-full flex-col items-center bg-transparent px-4 delay-200 ease-linear  dark:bg-transparent `}
    >
      <div className="flex h-full w-full max-w-7xl items-center justify-between text-white blur-none">
        <>
          <div></div>
          <button
            className="h-max w-max dark:hidden"
            onClick={() => {
              theme.setToDark();
              document.body.className = "dark";
            }}
          >
            <FontAwesomeIcon
              icon={faDarkbulb}
              className="h-7 w-7 text-darkPrimary"
            />
          </button>
          <button
            className="hidden h-max w-max dark:block"
            onClick={() => {
              theme.setToLight();
              document.body.className = "light";
            }}
          >
            <FontAwesomeIcon
              icon={faLightbulb}
              className="h-7 w-7 text-white"
            />
          </button>
        </>
      </div>
    </header>
  );
}
