const TypesCard = ({ type }: any) => {
  return (
    <div
      key={type.slot}
      className="font-general bg-g400 rounded-[40px] py-1.5 px-6 text-base"
    >
      {type.type.name}
    </div>
  );
};

export default TypesCard;
