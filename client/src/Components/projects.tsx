import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useState } from "react";
import todoImg from "../assets/images/TodoApp-ss1.png";

type projectTypeface = {
  title: string;
  content: ReactElement | string;
  duration?: string;
  repo: string;
  liveDemo?: string;
  appImg?;
};

export default function Project({
  title,
  content,
  duration,
  repo,
  liveDemo,
  appImg,
}: projectTypeface) {
  return (
    <main
      id="projectCard"
      className="group flex max-h-max w-[90%] flex-col justify-between gap-2 bg-light100 px-4
        py-5 shadow-lg outline-dashed outline-darkPrimary delay-200 duration-200 ease-linear hover:scale-[1.03] hover:bg-white focus:scale-[1.03] focus:bg-white focus:outline sm:h-[500px] sm:max-w-80 md:w-80 dark:rounded-md dark:bg-dark900 dark:shadow-xl dark:shadow-stone-800 dark:hover:bg-dark600 dark:focus:bg-dark600"
    >
      {appImg ? (
        <div className="h-auto w-full bg-stone-100 delay-200 duration-200 ease-linear">
          <img
            src={appImg}
            alt="App sample screenshots"
            className="hidden delay-150 duration-300 ease-linear group-hover:block sm:block"
          />
        </div>
      ) : null}
      <div className="flex h-full w-full flex-col justify-between gap-2 text-darkPrimary">
        <div className="w-full">
          <div className="mb-3 flex h-auto w-full flex-col gap-2 text-left dark:text-white">
            <h1 className="h-max w-auto font-[silkscreen] ">{title}</h1>
            <div className="h-px w-auto bg-darkPrimary dark:bg-white" />
          </div>
          {/* <p className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400"> */}
          {content}
          {/* </p> */}
        </div>
        <div className="hidden flex-col gap-2 group-hover:flex">
          {duration ? (
            <p className="mt-auto w-full text-left text-xs text-stone-500">
              {duration}
            </p>
          ) : null}
          <div className="flex w-full gap-2">
            <a
              target="_"
              href={repo}
              id="sourceCodeButton"
              className="e flex w-max items-center  border border-none bg-contrast px-2 py-2 text-left text-xs text-white dark:rounded-sm dark:bg-darkContrast dark:text-white"
            >
              Source code
              <FontAwesomeIcon icon={faGithub} className="ml-2 text-sm" />
            </a>
            <>
              {!liveDemo ? null : (
                <a
                  target="_"
                  href={liveDemo}
                  className="flex w-max items-center border  border-none bg-contrast px-2 py-2 text-left text-xs text-white  dark:rounded-sm dark:bg-darkContrast dark:text-white"
                >
                  Live demo
                  <FontAwesomeIcon icon={faPlay} className="ml-2 text-sm" />
                </a>
              )}
            </>
          </div>
        </div>
      </div>
    </main>
  );
}
