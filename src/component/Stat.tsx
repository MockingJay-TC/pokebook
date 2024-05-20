const Stat = ({ stat }: { stat: any }) => {
  return (
    <div className=" grid grid-cols-2 space-x-8 my-2">
      <h2 className="text-right">{stat.stat.name}</h2>
      <h2 className="text-left font-semibold flex items-center gap-6">
        <div className="flex w-2/3 h-2 bg-black/10 rounded-full overflow-hidden">
          <div
            className="flex w-full flex-col justify-center overflow-hidden bg-skin-base"
            role="progressbar"
            style={{ width: `${stat.base_stat}%` }}
          ></div>
        </div>
        <span className="text-normal font-semibold">{stat.base_stat}</span>
      </h2>
    </div>
  );
};

export default Stat;
