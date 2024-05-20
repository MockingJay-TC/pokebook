import GradLine from "../GradLine";
import About from "../About";
import { PokeMonDetail } from "../../Interfaces/interfaces";

const AboutTab = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="w-full">
      <GradLine />
      <h1 className="w-full font-clash py-4 bg-white font-semibold text-2xl">
        About
      </h1>
      <GradLine />
      <div>
        <About poke={poke} />
      </div>
      <GradLine />
    </div>
  );
};

export default AboutTab;
