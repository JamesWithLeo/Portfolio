import { Variants, motion } from "framer-motion";

export default function Name() {
  const letterContainerVariant: Variants = {
    animate: {
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        staggerChildren: 0.5, // Stagger the animation for each child
      },
    },
  };
  const letterVariant: Variants = {
    animate: {
      scale: [1, 1.5, 1], // Scale up to 1.5 and back to 1
      transition: {
        duration: 0.5, // Total duration of the scale animation
        ease: "easeInOut", // Smooth animation
      },
    },
  };
  const helloMsg = ["H", "E", "L", "L", "O"];
  const name = ["J", "A", "M", "E", "S"];
  return (
    <>
      <motion.main
        variants={letterContainerVariant}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="flex justify-center gap-4 md:justify-start">
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-4xl dark:font-[Gluten]">
            {helloMsg.map((letter, index) => (
              <motion.h1
                variants={letterVariant}
                className="w-max dark:text-white "
              >
                {letter}
              </motion.h1>
            ))}
            <h1 className="w-max  delay-200 duration-200 ease-linear  dark:text-white ">
              ,
            </h1>
          </div>
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-4xl dark:font-[Gluten]">
            <motion.h1
              variants={letterVariant}
              className="w-max  dark:text-white "
            >
              I
            </motion.h1>
          </div>
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-4xl dark:font-[Gluten]">
            <motion.h1
              variants={letterVariant}
              className="w-max   dark:text-white"
            >
              A
            </motion.h1>
            <motion.h1
              variants={letterVariant}
              className="w-max   dark:text-white  "
            >
              M
            </motion.h1>
          </div>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-5xl dark:font-[Gluten]">
            {name.map((letter, index) => (
              <motion.h1
                variants={letterVariant}
                className="w-max  dark:text-white"
              >
                {letter}
              </motion.h1>
            ))}
          </div>
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-5xl dark:font-[Gluten]">
            {["L", "E", "O"].map((letter) => (
              <motion.h1
                variants={letterVariant}
                className="w-max  dark:text-white "
              >
                {letter}
              </motion.h1>
            ))}
          </div>
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:hidden md:text-3xl lg:text-4xl dark:font-[Gluten]">
            {["O", "C", "A", "M", "P", "O"].map((letter, _) => (
              <motion.h1
                variants={letterVariant}
                className="w-max  dark:text-white "
              >
                {letter}
              </motion.h1>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-4xl dark:font-[Gluten]">
            <motion.h1
              variants={letterVariant}
              className=" w-max  dark:text-white "
            >
              A
            </motion.h1>
          </div>
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-4xl dark:font-[Gluten]">
            {["W", "E", "B"].map((letter, index) => (
              <motion.h1
                variants={letterVariant}
                className="w-max  dark:text-white "
              >
                {letter}
              </motion.h1>
            ))}
          </div>
          <div className="flex cursor-default gap-1 text-center font-[silkscreen] text-darkPrimary md:text-3xl lg:text-4xl dark:font-[Gluten]">
            {["D", "E", "V", "E", "L", "O", "P", "E", "R"].map(
              (letter, index) => (
                <motion.h1
                  variants={letterVariant}
                  className="w-max  dark:text-white "
                >
                  {letter}
                </motion.h1>
              ),
            )}
          </div>
        </div>
      </motion.main>
    </>
  );
}
