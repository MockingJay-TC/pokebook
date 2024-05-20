import { motion } from "framer-motion";
import { useState } from "react";
import { PokeMonDetail } from "../Interfaces/interfaces";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import TypesCard from "./TypesCard";
import Tabs from "./Tabs";
import AboutTab from "./Tabs/AboutTab";
import StatsTab from "./Tabs/StatsTab";
import SimilarTab from "./Tabs/SimilarTab";

const Details = ({
  open,
  setOpen,
  poke,
}: {
  open: boolean;
  setOpen: any;
  poke: PokeMonDetail;
}) => {
  const [tab, setTab] = useState<Number>(1);
  const sliderVariants = {
    hidden: {
      x: "100vw",
      opacity: 0.5,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1, stiffness: 120, damping: 20 },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 1, damping: 20 },
    },
  };
  return (
    <>
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="!overflow-hidden z-10 w-screen h-screen  bg-black/40 backdrop-blur-sm shadow-2xl fixed inset-0 p-4 lg:p-8 flex items-center justify-center"
          >
            <div className="absolute w-full h-full inset-0 bg-noise opacity-10 z-0 " />
          </div>
          <motion.div
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden fixed h-screen z-50 top-0 right-0 -translate-x-1/2 w-[100%] md:w-[45%] lg:w-[45%] xl:w-[40%] py-2 lg:py-4 px-2 lg:px-4 flex-col items-start justify-center bg-white"
          >
            <div className="w-full h-full flex flex-col items-center justify-start bg-gradient-to-r from-white/20 via-gline/20 to-white/20">
              <div className="py-3 px-3 bg-gradient-to-b from-gtop to-gdown h-1/5 2xl:h-2/5 w-full md:h-1/3 rounded-2xl">
                <div
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:shadow-xl w-16 p-3 rounded-xl h-16 flex items-center justify-center bg-white shadow-md"
                >
                  <ArrowLeftIcon className="font-bold" />
                </div>
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={poke.sprites?.other?.dream_world.front_default}
                    alt="Pokemon"
                    className="h-full w-28 md:w-56 2xl:w-full lg:mt-8"
                  />
                </div>
              </div>
              <div className="mt-8 md:mt-16 mb-4">
                <h2 className="font-clash text-5xl font-medium my-4">
                  {poke.name}
                </h2>
                <div className="my-8 flex justify-center items-center gap-8">
                  {poke.types?.map((type: any) => {
                    return (
                      <TypesCard
                        key={type.slot}
                        type={type}
                        style={"text-2xl"}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={tab === 1 ? "block w-full" : "hidden"} id="tab1">
                <AboutTab poke={poke} />
              </div>
              <div className={tab === 2 ? "block w-full" : "hidden"} id="tab2">
                <StatsTab poke={poke} />
              </div>
              <div className={tab === 3 ? "block w-full" : "hidden"} id="tab3">
                <SimilarTab poke={poke} />
              </div>
            </div>
            <Tabs setTab={setTab} tab={tab} />
          </motion.div>
        </>
      )}
    </>
  );
};

export default Details;
