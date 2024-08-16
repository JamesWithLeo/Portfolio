import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faStarSolid,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Rate({ setDisplay }) {
  const [rate, setRate] = useState<number>(0);

  return (
    <div className="sticky left-[100%] top-[70%] z-10 box-border flex h-max w-auto flex-row items-center">
      <button
        className="self-center px-1 text-white dark:text-darkPrimary"
        onClick={() => {
          setDisplay(false);
        }}
      >
        <FontAwesomeIcon icon={faXmark} className="" />
      </button>
      <div className="flex flex-col items-center bg-[#FFEAD2] shadow dark:bg-[#8DB596]">
        <h1 className="px-2 py-2 text-sm font-bold text-darkPrimary dark:text-white">
          Rate my portfolio{" "}
        </h1>
        <div className="box-border flex w-full items-center justify-evenly gap-3 bg-white px-2 py-2 text-sm">
          {rate >= 1 ? (
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-stone-400"
              onClick={() => {
                setRate(0);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              className="text-stone-400"
              onClick={() => {
                setRate(1);
              }}
            />
          )}

          {rate >= 2 ? (
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-stone-400"
              onClick={() => {
                setRate(2);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              className="text-stone-400"
              onClick={() => {
                setRate(2);
              }}
            />
          )}

          {rate >= 3 ? (
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-stone-400"
              onClick={() => {
                setRate(3);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              className="text-stone-400"
              onClick={() => {
                setRate(3);
              }}
            />
          )}

          {rate >= 4 ? (
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-stone-400"
              onClick={() => {
                setRate(4);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              className="text-stone-400"
              onClick={() => {
                setRate(4);
              }}
            />
          )}

          {rate >= 5 ? (
            <FontAwesomeIcon
              icon={faStarSolid}
              className="text-stone-400"
              onClick={() => {
                setRate(0);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              className="text-stone-400"
              onClick={() => {
                setRate(5);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
