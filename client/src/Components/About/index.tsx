export default function About() {
  return (
    <div className="flex h-max w-full max-w-7xl flex-col items-center justify-center gap-y-8 pb-32 pt-16  dark:bg-darkPrimary">
      <h1 className="w-full  p-4 font-[silkscreen] text-2xl text-darkPrimary md:text-3xl lg:px-12 lg:text-4xl dark:text-white">
        # About Me
      </h1>
      <div className="flex h-full flex-col gap-8 border border-stone-200 bg-stone-50 p-8 text-darkPrimary shadow-inner md:w-[90%] lg:px-8 dark:border-none dark:bg-darkPrimary dark:text-white">
        <div className="h-0.5 w-3/4 dark:bg-red-500 "></div>
        <p className="h-full text-justify indent-8  text-sm leading-normal text-darkPrimary md:leading-loose lg:text-base lg:leading-loose dark:text-white ">
          I am James, a self-taught programmer forced to study hard to achieve
          my goals. Just like others, I love tea and{" "}
          <span className="cursor-default underline">music</span>. Other than
          that, I’m a homebody, meaning I’m not an active person. I’d rather
          stay inside my house scrolling through my phone or coding websites.
        </p>
        <div className="h-0.5 w-3/4 self-end dark:bg-red-500"></div>
      </div>
    </div>
  );
}
