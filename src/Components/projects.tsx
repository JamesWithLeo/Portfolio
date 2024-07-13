import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type projectTypeface = {
  title: string;
  content: string;
  duration?: string;
  // onClick: () => void;
};

export default function Project({ title, content, duration }: projectTypeface) {
  const [ishover, SetHover] = useState<boolean>(false);
  return (
    <button
      id="projectCard"
      // 2A2727
      // 463D3D
      onMouseEnter={() => {
        SetHover(true);
      }}
      onMouseLeave={() => {
        SetHover(false);
      }}
      onClick={() => {
        console.log("Project!");
      }}
      className="dark:focus:bg-dark600 dark:hover:bg-dark600 bg-light100 group flex sm:h-[510px] max-h-max sm:max-w-80 w-[90%]
        md:w-80 flex-col justify-between gap-4 px-4 py-5 shadow-lg outline-dashed outline-darkPrimary delay-200 duration-200 ease-linear hover:scale-[1.03] hover:bg-white focus:scale-[1.03] focus:bg-white focus:outline dark:rounded-md dark:bg-dark900 dark:shadow-xl dark:shadow-stone-800"
    >
      <div className="h-1/2 w-full bg-stone-100 delay-200 duration-200 ease-linear" />
      <div className=" flex h-1/2 w-full flex-col justify-between gap-2 text-darkPrimary">
        <div className="w-full">
          <div className="mb-3 flex h-auto w-full flex-col gap-2 text-left dark:text-white">
            <h1 className="h-max w-auto font-[silkscreen] ">{title}</h1>
            <div className="h-px w-auto bg-darkPrimary dark:bg-white" />
          </div>
          <p className="mb-2 w-full text-left font-mono text-sm font-light text-darkPrimary dark:text-stone-400">
            {content}
          </p>
        </div>
        {ishover ? (
          <>
            {duration ? (
              <p className="mt-auto w-full text-left text-xs text-stone-500">
                Estimated duration of work: {duration}
              </p>
            ) : null}
            <a
              target="_"
              href="https://github.com"
              id="sourceCodeButton"
              // onClick={gotoCode}
              className="flex w-max items-center border  border-none bg-contrast px-2 py-2 text-left text-xs text-white hover:underline dark:rounded-sm dark:bg-darkContrast dark:text-white"
            >
              Source code
              <FontAwesomeIcon icon={faGithub} className="ml-2 text-sm" />
            </a>
          </>
        ) : null}
      </div>
    </button>
  );
}
