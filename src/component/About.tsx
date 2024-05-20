import { PokeMonDetail } from "../Interfaces/interfaces";
import GradLine from "./GradLine";

const About = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="my-4 font-clash text-xl w-full flex flex-col items-center">
      <div>
        <div className=" grid grid-cols-2 space-x-8 my-2">
          <h2 className="">Height</h2>
          <h2 className="text-left font-semibold">{poke.height}</h2>
        </div>
        <GradLine />
        <div className="grid grid-cols-2  space-x-8 my-2">
          <h2>Weight</h2>
          <h2 className="text-left font-semibold">{poke.weight}</h2>
        </div>
        <GradLine />
        <div className="grid grid-cols-2 space-x-8 my-2">
          <h2>Abilities</h2>
          <div className="font-semibold flex items-start flex-col">
            {poke.abilities.map((ability: any, index: number) => {
              return <li key={index}>{ability.ability.name}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
