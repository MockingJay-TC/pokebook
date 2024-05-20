import GradLine from "../GradLine";
import { PokeMonDetail } from "../../Interfaces/interfaces";
import Stats from "../Stats";

const StatsTab = ({ poke }: { poke: PokeMonDetail }) => {
  return (
    <div className="w-full">
      <GradLine />
      <h1 className="w-full font-clash py-4 bg-white font-semibold text-2xl">
        Stats
      </h1>
      <GradLine />
      <div>
        <Stats poke={poke} />
      </div>
      <GradLine />
    </div>
  );
};

export default StatsTab;
