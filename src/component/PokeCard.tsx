import { PokeMonDetail } from "../Interfaces/interfaces";
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Details from "./Details";
import TypesCard from "./TypesCard";
const PokeCard = ({ poke }: { poke: PokeMonDetail }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const divMotion = {
    rest: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    hover: {
      opacity: [0, 1],
      y: [-30, 0],
      transition: { duration: 0.7, ease: "easeOut", type: "tween" },
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      key={poke.name}
      className="text-black text-2xl shadow-md flex justify-center p-3 !pb-8 hover:!pb-2 text-center bg-white rounded-2xl md:h-80 md:hover:h-96 h-96 group transition-all duration-500 ease-in-out"
    >
      <div className="w-full ">
        <div className="bg-dark rounded-2xl flex justify-center items-center h-2/5 md:h-3/5 md:group-hover:h-2/5 pb-8 relative transition-all ease-in-out duration-500">
          <img
            src={poke.sprites?.other?.dream_world.front_default}
            alt="Pokeman"
            className="h-52 w-full absolute -top-16"
          />
        </div>
        <h2 className="font-clash text-2xl font-medium my-4">{poke.name}</h2>
        <div className="my-8 flex justify-center items-center gap-8">
          {poke.types?.map((type: any) => {
            return <TypesCard key={type.slot} type={type} />;
          })}
        </div>
        <motion.button
          onClick={() => handleOpen()}
          variants={divMotion}
          className="bg-skin-base w-full py-4 px-8 flex md:group-hover:flex justify-between items-center rounded-2xl md:hidden"
        >
          <h2 className="font-general text-white text-base">View Pokemon</h2>
          <EyeIcon className="w-6 text-white" />
        </motion.button>
      </div>
      <Details open={open} setOpen={setOpen} poke={poke} />
    </motion.div>
  );
};

export default PokeCard;
