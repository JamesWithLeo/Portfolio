import Project from "../Card/projects";
import todoImg from "../../assets/images/TodoApp-ss1.png";
import melbakeImg from "../../assets/images/melbakeApp-ss1.png";
import melhotelImg from "../../assets/images/melhotelApp-ss1.png";
import hardwareImg from "../../assets/images/hardware.png";
import chatAppImg from "../../assets/images/we-chat.png";
import TechnolgyLink from "../technologyLink";
import { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Projects() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isSwitched, setIsSwitched] = useState<boolean>(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const showMore = () => {
    setIsCollapsed(true);
    const parent = document.getElementById("project-parent") as HTMLDivElement;
    parent.className =
      "relative grid grid-cols-1 gap-8 overflow-hidden scroll-smooth p-2 px-12 md:grid-cols-2 lg:grid-cols-3 pb-28 ";
  };
  const showLess = () => {
    setIsCollapsed(false);
    const parent = document.getElementById("project-parent") as HTMLDivElement;
    parent.className =
      "relative grid max-h-[38rem] grid-cols-1 gap-8 overflow-hidden scroll-smooth p-2 px-12 md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div
      className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-8 pb-32 pt-16"
      id="projects"
    >
      <div className="flex w-full gap-8 p-4 lg:px-12 ">
        <h1 className="font-[silkscreen] text-2xl text-darkPrimary md:text-3xl lg:text-4xl dark:text-white ">
          #
        </h1>
        <div className="flex w-full flex-col items-start gap-2 md:flex-row md:gap-8">
          <motion.button
            onClick={() => setIsSwitched(!isSwitched)}
            className="font-[silkscreen] text-2xl text-darkPrimary md:text-3xl lg:text-4xl dark:text-white "
            animate={{
              opacity: isSwitched ? 0.3 : 1,
              x: isSwitched && !isSmallScreen ? "160%" : "0%",
              y: isSmallScreen && isSwitched ? "140%" : "0%",
            }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={() => setIsSwitched(!isSwitched)}
            className="font-[silkscreen]  text-2xl text-darkPrimary  md:text-3xl lg:text-4xl dark:text-white"
            animate={{
              opacity: isSwitched ? 1 : 0.3,
              x: isSwitched && !isSmallScreen ? "-80%" : "0%",
              y: isSmallScreen && isSwitched ? "-125%" : "0%",
            }}
          >
            contribution
          </motion.button>
        </div>
      </div>

      <div
        className="relative grid max-h-[38rem] grid-cols-1 gap-8 overflow-hidden scroll-smooth p-2 px-12 md:grid-cols-2 lg:grid-cols-3"
        id="project-parent"
      >
        {isSwitched ? (
          <>
            <Project
              title="Real-time Chat App (forked)"
              repo="https://github.com/JamesWithLeo/react-chat-app"
              liveDemo="https://react-chat-app-seven-murex.vercel.app/"
              appImg={chatAppImg}
              content={
                <span className="mb-2 w-full text-left font-mono text-xs font-light text-darkPrimary dark:text-stone-400">
                  I developed a chat application by forking the front-end from
                  <TechnolgyLink
                    href="https://github.com/DulanjaliSenarathna/react-chat-app"
                    target="DulanjaliSenarathna/react-chat-app"
                  />
                  , While the original front-end provided a solid foundation, I
                  enhanced it by adding real-time chat functionality using
                  Socket.IO and integrated Redux for state management. I also
                  converted the entire front-end to TypeScript to improve type
                  safety and maintainability. For the back-end, I built a custom
                  solution from scratch using
                  <TechnolgyLink
                    href="https://nodejs.org/en"
                    target="Node.js"
                  />{" "}
                  backend, leveraging{" "}
                  <TechnolgyLink href="https://socket.io/" target="Socket.io" />{" "}
                  for real-time communication and{" "}
                  <TechnolgyLink
                    href="https://supabase.com/docs/guides/database/postgres-js"
                    target="SupaBase"
                  />{" "}
                  (Postgres) for database management.
                </span>
              }
            />
          </>
        ) : (
          <>
            <Project
              title="Hardware Management system"
              repo="https://github.com/JamesWithLeo/codey"
              liveDemo="https://codey-roan.vercel.app/"
              appImg={hardwareImg}
              content={
                <span className="mb-2 w-full text-left font-mono text-xs font-light text-darkPrimary dark:text-stone-400">
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
                  <TechnolgyLink
                    target="Airbnb"
                    href="https://www.airbnb.com/"
                  />
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
                <span className="mb-2 w-full text-left font-mono  text-xs font-light text-darkPrimary dark:text-stone-400">
                  A hotel management system, Featuring Booking system and
                  Authorizaton with the help of{" "}
                  <TechnolgyLink href="https://redux.js.org/" target="redux" />,
                  <TechnolgyLink
                    href="https://leafletjs.com/"
                    target="Leaflet"
                  />
                  for Mapping. Other technolgy used:{" "}
                  <TechnolgyLink href="https://react.dev/" target="react" />,
                  <TechnolgyLink
                    href="https://www.typescriptlang.org/"
                    target="typescript"
                  />
                  ,
                  <TechnolgyLink
                    href="https://nodejs.org/en"
                    target="Node.js"
                  />{" "}
                  with{" "}
                  <TechnolgyLink
                    href="https://expressjs.com/"
                    target="Express"
                  />
                  ,
                  <TechnolgyLink
                    href="https://axios-http.com/"
                    target="axios"
                  />
                  ,
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
                <span className="mb-2 w-full text-left font-mono text-xs font-light text-darkPrimary dark:text-stone-400">
                  My first Ever E-commerce website created using{" "}
                  <TechnolgyLink
                    href="https://www.mongodb.com/"
                    target="MongoDb"
                  />
                  ,
                  <TechnolgyLink
                    href="https://expressjs.com/"
                    target="Express"
                  />
                  ,
                  <TechnolgyLink href="https://react.dev/" target="react" />,
                  <TechnolgyLink
                    href="https://nodejs.org/en"
                    target="Node.js"
                  />
                  , <br />
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
                <span className="mb-2 w-full text-left font-mono text-xs font-light text-darkPrimary dark:text-stone-400">
                  Basic MERN Todo web application.
                </span>
              }
              appImg={todoImg}
            />
            <Project
              title={"Noter"}
              repo="https://github.com/JamesWithLeo/NoterApp_Csharp_Wpf"
              content={
                <span className="mb-2 w-full text-left font-mono  text-xs font-light text-darkPrimary dark:text-stone-400">
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
                <span className="mb-2 w-full text-left font-mono  text-xs font-light text-darkPrimary dark:text-stone-400">
                  Note pad like Application, created using C# WPS. Management
                  System created using Python with Tkinter for ui, has CRUD
                  operations. This application is inspired by my college school.
                </span>
              }
            />
          </>
        )}

        <div className=" absolute bottom-0 z-10 col-span-2 flex w-full items-center justify-center bg-gradient-to-t from-light  pb-8 pt-16 dark:from-darkPrimary">
          {isCollapsed ? (
            <button
              onClick={showLess}
              className="cursor-pointer rounded bg-darkPrimary px-4 py-2 text-xs font-bold text-white dark:bg-light dark:text-darkPrimary"
            >
              Show less
            </button>
          ) : (
            <button
              onClick={showMore}
              className="cursor-pointer rounded bg-darkPrimary px-4 py-2 text-xs font-bold text-white dark:bg-light dark:text-darkPrimary"
            >
              See more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
