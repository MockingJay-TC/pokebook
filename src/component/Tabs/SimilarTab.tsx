import GradLine from "../GradLine";
import { PokeMonDetail } from "../../Interfaces/interfaces";
import Similar from "../Similar";

const SimilarTab = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="w-full">
      <GradLine />
      <h1 className="w-full font-clash py-4 bg-white font-semibold text-2xl">
        Similar
      </h1>
      <GradLine />
      <div>
        <Similar poke={poke} />
      </div>
      <GradLine />
    </div>
  );
};

export default SimilarTab;
