import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmailMe from "./emailMe";

export default function Footer() {
  return (
    <footer
      className="flex h-max w-full flex-row items-center justify-center gap-4 bg-darkPrimary p-8 delay-200  duration-200 ease-linear lg:px-32 dark:bg-white dark:shadow-inner dark:shadow-darkPrimary"
      id="contact"
    >
      <section className=" flex w-full max-w-7xl flex-col gap-8 delay-200 duration-200 ease-linear md:flex-row">
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
          <EmailMe />
        </div>
      </section>
    </footer>
  );
}
