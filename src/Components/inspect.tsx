type InspectFacetype = {
  name: string;
};

export default function Inspect({ name }: InspectFacetype) {
  return (
    <>
      <div className="absolute md:left-[60%] top-[20%] md:top-[30%] lg:top-[20%] flex h-auto w-auto flex-col gap-4 rounded bg-white p-2 shadow-2xl">
        <div className="flex gap-2">
          <div className="flex ">
            <h1 className="text-xs font-bold text-purple-700">{name}</h1>
            <h1 className="text-xs font-bold text-blue-500">
              .James.Leo.Ocampo
            </h1>
          </div>
          <h1 className="text-xs text-gray-500">--.-- x --.--</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-xs font-bold text-gray-500">ACCESSIBILITY</h1>
          <div className="h-[1px] w-full bg-gray-500" />
        </div>
        <div>
          <h1 className="text-xs text-gray-500">Name</h1>
          <h1 className="text-xs text-gray-500">Role</h1>
          <h1 className="text-xs text-gray-500">Keyboard-Focusable</h1>
        </div>
        <div
          className="absolute -bottom-2 left-[10%] mx-auto h-0 w-0 
      rotate-180 border-b-[10px] border-l-[10px]
      border-r-[10px] border-solid border-b-white border-l-transparent border-r-transparent shadow-2xl"
        ></div>
      </div>
    </>
  );
}
