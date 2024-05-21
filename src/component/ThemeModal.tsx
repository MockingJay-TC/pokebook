/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { ThemeContext } from "../context/Context";

const ThemeModal = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const { setPokeTheme }: any = useContext(ThemeContext);

  const getTheme = (value: string) => {
    setPokeTheme(value);
    setOpen(false);
  };
  return (
    <>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="!overflow-hidden z-10 w-screen h-screen bg-black/40 backdrop-blur-sm shadow-2xl fixed inset-0 p-4 lg:p-8 flex items-center justify-center"
          >
            <div className="absolute w-full h-full inset-0 bg-noise opacity-10 z-0 " />
          </div>
          <div className="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 w-96 -translate-y-1/2 z-50 shadow-lg flex items-center justify-center bg-white/80  rounded-3xl ">
            <div className="w-full">
              <h3 className="flex items-center justify-center text-center font-clash font-semibold text-2xl py-4">
                Choose Theme
              </h3>
              <div className="flex items-center justify-center gap-4  bg-black/20 py-12">
                <div
                  onClick={() => getTheme("")}
                  className="border-gray border rounded-full flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-primary w-16 h-16 m-1 rounded-full" />
                </div>
                <div
                  onClick={() => getTheme("blue")}
                  className="border-gray hover:border rounded-full flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-secondary w-16 h-16 m-1 rounded-full" />
                </div>
                <div
                  onClick={() => getTheme("yellow")}
                  className="border-gray hover:border rounded-full flex items-center justify-center cursor-pointer"
                >
                  <div className="bg-altenate w-16 h-16 m-1 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ThemeModal;
