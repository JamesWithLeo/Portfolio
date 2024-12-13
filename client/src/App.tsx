// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as faDarkbulb } from "@fortawesome/free-solid-svg-icons";
import SvgComponent from "./SvgComponent";
import me from "./assets/me.jpg";
import { useState } from "react";
import Inspect from "./Components/inspect";
import Rate from "./Components/rate";
import { ThemeConsumer } from "./Components/themeContext";
import Name from "./Components/Name";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { motion } from "framer-motion";

function App() {
  const theme = ThemeConsumer();
  const [hoverHero, setHoverHero] = useState<Boolean>(false);
  const [hoverRateMe, setHoverRateMe] = useState<Boolean>(true);

  return (
    <div className="box-border flex h-auto w-full flex-col items-center bg-light dark:bg-darkPrimary">
      <header className="sticky top-0 z-20 flex h-16 w-full flex-col items-center bg-light px-4 shadow dark:bg-dark900">
        <div className="flex h-full w-full max-w-7xl items-center justify-between text-white">
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

      <div className="z-10 hidden bg-transparent dark:block">
        {theme.theme === "light" ? null : <SvgComponent />}
      </div>
      <main className="flex max-h-[1000px] w-full max-w-7xl flex-col-reverse items-center md:flex-row lg:h-screen dark:bg-darkPrimary">
        <div className="z-10 flex h-max grid-cols-5 flex-col-reverse items-center gap-8 py-8 md:grid md:w-1/2 lg:pl-4">
          <div
            id="socialMedias"
            className="flex items-center gap-8 md:flex-col"
          >
            <a href="https://github.com/JamesWithLeo">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl text-darkPrimary delay-200 duration-200 ease-linear hover:scale-110 dark:text-white"
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.facebook.com/JAMES.ocampoGI">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl text-darkPrimary delay-200 duration-200 ease-linear hover:scale-110 dark:text-white"
              />
            </a>
            <a href="https://www.linkedin.com/in/james-leo-ocampo-888686307/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl text-darkPrimary delay-200 duration-200 ease-linear hover:scale-110 dark:text-white"
              />
            </a>
          </div>

          <div className="col-span-4 flex flex-col gap-2">
            <Name />
          </div>
        </div>
        <div className="z-10 flex h-max w-full flex-col items-center justify-center sm:pt-16 md:h-screen md:w-1/2 md:pt-0">
          <img
            src={me}
            alt="James Handsome in formal"
            className="shadow-[rgba(0, 0, 0, 0.56) 0px 22px 70px 4px] h-auto border-stone-100 shadow delay-200 duration-200 ease-linear sm:max-w-96 md:w-72 md:border-[16px] lg:w-80 dark:shadow-stone-900 dark:md:rounded-full dark:md:border-0"
            onMouseEnter={() => {
              setHoverHero(true);
            }}
            onMouseLeave={() => {
              setHoverHero(false);
            }}
          />
          {hoverHero ? <Inspect name={"HeroImage"} /> : null}
        </div>

        {/* background box design  */}
        <div className="absolute left-[80%] top-[100px] hidden h-16 w-16 border border-stone-200 bg-stone-50 shadow-inner md:block dark:hidden" />
        <div className="absolute left-[87%] top-[15%] hidden h-9 w-9 border border-stone-200 shadow-inner md:block dark:hidden"></div>
        <div className="absolute left-3 top-32 hidden h-16 w-16 border border-stone-200 shadow-inner md:block dark:hidden"></div>
        <div className="absolute left-[7%] top-[16%] hidden h-9 w-9 border border-stone-200 shadow-inner md:block dark:hidden"></div>
        <div className="absolute left-[450px] hidden h-8 w-8 border border-stone-200 shadow-inner md:block dark:hidden"></div>
        <div className="absolute left-[37%] top-[280px] hidden h-16 w-16 border border-stone-200 shadow-inner md:block dark:hidden"></div>
        <div className="absolute left-[78%] top-[600px] hidden h-16 w-16 border border-stone-200 shadow-inner md:block dark:hidden" />
        <div className="absolute left-[74%] top-[600px] hidden h-8 w-8 border border-stone-200 bg-stone-50 shadow-inner md:block dark:hidden" />

        <div className="fixed right-10 z-10 hidden flex-col gap-3 md:flex">
          <a href="#top">
            <div className="h-3 w-3 rounded-sm bg-white shadow shadow-darkPrimary active:shadow-inner active:shadow-darkPrimary dark:rounded-full dark:bg-darkPrimary dark:shadow-white dark:active:shadow-white" />
          </a>
          <a href="#projects">
            <div className="h-3 w-3 rounded-sm bg-white shadow shadow-darkPrimary active:shadow-inner active:shadow-darkPrimary dark:rounded-full dark:bg-darkPrimary dark:shadow-white dark:active:shadow-white" />
          </a>
          <a href="#contact">
            <div className="h-3 w-3 rounded-sm bg-white shadow shadow-darkPrimary active:shadow-inner active:shadow-darkPrimary dark:rounded-full dark:bg-darkPrimary dark:shadow-white dark:active:shadow-white" />
          </a>
        </div>
        {theme.theme === "light" ? null : (
          <div className="absolute top-0 z-20 hidden bg-transparent dark:block">
            <SvgComponent />
          </div>
        )}
      </main>

      <Projects />
      <About />

      {hoverRateMe ? <Rate setDisplay={setHoverRateMe} /> : null}
      <Footer />
    </div>
  );
}

export default App;
