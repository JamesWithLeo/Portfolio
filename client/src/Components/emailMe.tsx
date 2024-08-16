import axios from "axios";

export default function EmailMe() {
  const HandleSendEmail = async () => {
    const emailElement = document.getElementById(
      "clientEmail",
    ) as HTMLInputElement;
    const subjectElement = document.getElementById(
      "emailsubject",
    ) as HTMLInputElement;
    const contentElement = document.getElementById(
      "emailContent",
    ) as HTMLInputElement;
    if (!emailElement.value || !subjectElement || !contentElement) return;
    axios
      .post("/api/send-email", {
        from: emailElement.value,
        subject: subjectElement.value,
        cc: [emailElement.value],
        text: contentElement.value,
      })
      .then(() => {
        subjectElement.value = "";
        contentElement.value = "";
      })
      .catch((reason) => {
        console.log(reason);
      });
  };
  return (
    <>
      <h1 className="text-xl font-bold text-stone-200 dark:text-darkPrimary">
        Lets have talk?
      </h1>
      <input
        id="clientEmail"
        required
        type="text"
        className="w-full rounded bg-stone-100 p-2 outline-1 outline-darkPrimary focus:outline-none dark:bg-stone-100"
        placeholder="Enter your Gmail!"
      />
      <input
        id="emailsubject"
        required
        type="text"
        className="w-full rounded bg-stone-100 p-2 outline-1 outline-darkPrimary focus:outline-none dark:bg-stone-100"
        placeholder="Subject"
      />
      <textarea
        id="emailContent"
        required
        maxLength={100}
        spellCheck="true"
        autoComplete="on"
        className="h-60 w-full resize-none rounded bg-stone-100 p-2 text-sm outline-1 outline-darkPrimary focus:outline-none dark:bg-stone-100"
        placeholder="Type your message here."
      />
      <button
        onClick={HandleSendEmail}
        className="self-end rounded bg-stone-100 px-5 py-2 text-darkPrimary delay-200 duration-200 ease-linear
            hover:bg-contrast hover:text-stone-200 active:bg-contrast active:text-white dark:hover:bg-darkContrast dark:active:bg-darkContrast"
      >
        Send
      </button>
    </>
  );
}
