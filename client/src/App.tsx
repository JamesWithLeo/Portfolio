// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import todoImg from "./assets/images/TodoApp-ss1.png";
import melbakeImg from "./assets/images/melbakeApp-ss1.png";
import melhotelImg from "./assets/images/melhotelApp-ss1.png";
import hardwareImg from "./assets/images/hardware.png";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faLightbulb as faDarkbulb } from "@fortawesome/free-solid-svg-icons";
import SvgComponent from "./SvgComponent";
import me from "./assets/me.jpg";
import { useState } from "react";
import Inspect from "./Components/inspect";
import Rate from "./Components/rate";
import EmailMe from "./Components/emailMe";
import AboutMe from "./Components/aboutMe";
import Project from "./Components/projects";
import { ThemeConsumer } from "./Components/themeContext";
import Name from "./Components/Name";
import TechnolgyLink from "./Components/technologyLink";
function App() {
  const theme = ThemeConsumer();
  const [hoverHero, setHoverHero] = useState<Boolean>(false);
  const [hoverRateMe, setHoverRateMe] = useState<Boolean>(true);

  const next = () => {
    const carousel = document.getElementById(
      "project-carousel",
    ) as HTMLDivElement;

    carousel.scrollBy({ left: 200 });
  };

  const prev = () => {
    const carousel = document.getElementById(
      "project-carousel",
    ) as HTMLDivElement;

    carousel.scrollBy({ left: -200 });
  };
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

      <div
        className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-8 pb-32 pt-16"
        id="projects"
      >
        <h1 className="w-full p-4 font-[silkscreen] text-2xl text-darkPrimary md:text-3xl lg:px-12 lg:text-4xl dark:text-white ">
          # Projects
        </h1>
        <div
          className="flex touch-pan-x snap-x snap-mandatory gap-8 overflow-x-hidden scroll-smooth p-2 px-12"
          id="project-carousel"
        >
          <Project
            title="Hardware Management system"
            repo="https://github.com/JamesWithLeo/codey"
            liveDemo="https://codey-roan.vercel.app/"
            appImg={hardwareImg}
            content={
              <span className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
                Next.js project Featuring product search, pagination and auth
                using.
                <TechnolgyLink
                  href="https://next-auth.js.org/"
                  target="NextAuth"
                />
                ,with
                <br />
                <TechnolgyLink
                  href="https://vercel.com/storage/postgres"
                  target="vercel postgres"
                />
                for data harehousing.
                <br />
                The ui is inspired to{" "}
                <TechnolgyLink target="Airbnb" href="https://www.airbnb.com/" />
                .
              </span>
            }
          />
          <Project
            title="Mel Hotel"
            repo="https://github.com/JamesWithLeo/Mel-Hotel"
            liveDemo="https://mel-hotel.onrender.com/"
            appImg={melhotelImg}
            content={
              <span className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
                A hotel management system, Featuring Booking system and
                Authorizaton with the help of{" "}
                <TechnolgyLink href="https://redux.js.org/" target="redux" />,
                <TechnolgyLink href="https://leafletjs.com/" target="Leaflet" />
                for Mapping. Other technolgy used:{" "}
                <TechnolgyLink href="https://react.dev/" target="react" />,
                <TechnolgyLink
                  href="https://www.typescriptlang.org/"
                  target="typescript"
                />
                ,<TechnolgyLink href="https://nodejs.org/en" target="Node.js" />{" "}
                with{" "}
                <TechnolgyLink href="https://expressjs.com/" target="Express" />
                ,
                <TechnolgyLink href="https://axios-http.com/" target="axios" />,
                <TechnolgyLink
                  href="https://www.material-react-table.com/"
                  target="MRT"
                />
                for tables and MongoDb for database.
              </span>
            }
          />
          <Project
            title={"Mel Bakes"}
            liveDemo="https://mel-bakes.onrender.com"
            duration="2 months, still on developement, 2024"
            repo="https://github.com/JamesWithLeo/Mel-Bakes"
            appImg={melbakeImg}
            content={
              <span className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
                My first Ever E-commerce website created using{" "}
                <TechnolgyLink
                  href="https://www.mongodb.com/"
                  target="MongoDb"
                />
                ,
                <TechnolgyLink href="https://expressjs.com/" target="Express" />
                ,
                <TechnolgyLink href="https://react.dev/" target="react" />,
                <TechnolgyLink
                  href="https://nodejs.org/en"
                  target="Node.js"
                />, <br />
                <TechnolgyLink
                  target="TanStack Query"
                  href="https://tanstack.com/query/latest"
                />{" "}
                &{" "}
                <TechnolgyLink
                  target="cloudinary"
                  href="https://cloudinary.com/"
                />
                , This project is inspired by my girlfriend who loves to bake
                and eat cupcakes.
              </span>
            }
          />
          <Project
            title="Todo"
            repo="https://github.com/JamesWithLeo/todo-app"
            liveDemo="https://todo-j15i.onrender.com/"
            duration="Estimated duration of work: 2 day"
            content={
              <span className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
                Basic MERN Todo web application.
              </span>
            }
            appImg={todoImg}
          />
          <Project
            title={"Noter"}
            repo="https://github.com/JamesWithLeo/NoterApp_Csharp_Wpf"
            content={
              <span className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
                Note pad like Application, created using C# WPS.
              </span>
            }
            duration="Estimated duration of work: 1 week, 2023"
          />
          <Project
            title={"School Crud Sys."}
            repo="https://github.com/JamesWithLeo/Python-School-Management-System"
            duration="2022"
            content={
              <span className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
                Note pad like Application, created using C# WPS. Management
                System created using Python with Tkinter for ui, has CRUD
                operations. This application is inspired by my college school.
              </span>
            }
          />
        </div>
        <button onClick={prev} className="p-2 text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </button>
        <button onClick={next} className="p-2 text-black dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </button>
      </div>

      <div className="flex h-max w-full max-w-7xl flex-col items-center justify-center gap-y-8 pb-32 pt-16  dark:bg-darkPrimary">
        <h1 className="w-full  p-4 font-[silkscreen] text-2xl text-darkPrimary md:text-3xl lg:px-12 lg:text-4xl dark:text-white">
          # About Me
        </h1>
        <div className="flex h-full flex-col gap-8 border border-stone-200 bg-stone-50 p-8 text-darkPrimary shadow-inner md:w-[90%] lg:px-8 dark:border-none dark:bg-darkPrimary dark:text-white">
          <div className="h-0.5 w-3/4 dark:bg-red-500 "></div>
          <AboutMe />
          <div className="h-0.5 w-3/4 self-end dark:bg-red-500"></div>
        </div>
      </div>

      {hoverRateMe ? <Rate setDisplay={setHoverRateMe} /> : null}

      <div
        className="flex h-max w-full flex-row items-center justify-center gap-4 bg-darkPrimary p-8 delay-200  duration-200 ease-linear lg:px-32 dark:bg-white dark:shadow-inner dark:shadow-darkPrimary"
        id="contact"
      >
        <div className=" flex w-full max-w-7xl flex-col gap-8 delay-200 duration-200 ease-linear md:flex-row">
          <div className="flex w-1/3 flex-col gap-2 self-baseline delay-200 duration-200 ease-linear ">
            <h1 className="text-xl font-bold text-stone-200 dark:text-darkPrimary">
              Add me on social media!
            </h1>
            <h1 className="w-max border-b-2 border-[#8294C4] text-xl text-stone-200 dark:border-red-500 dark:text-darkPrimary">
              Lets be friends!
            </h1>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/JAMES.ocampoGI"
                about="Authors Facebook Link"
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className="text-4xl text-stone-200 delay-200 duration-200 ease-linear hover:scale-110 dark:text-darkPrimary"
                />
              </a>
              <a
                href="https://www.instagram.com/liostupidaf/"
                about="Authors Instagram Link"
              >
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className="text-4xl text-stone-200 delay-200 duration-200 ease-linear hover:scale-110 dark:text-darkPrimary"
                />
              </a>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex h-full w-full flex-col gap-2 md:w-1/2">
              <EmailMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
