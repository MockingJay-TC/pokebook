const Tabs = ({ tab, setTab }: { tab: Number; setTab: any }) => {
  return (
    <div className="absolute z-50 font-general text-lg bottom-4 w-full py-4 bg-white font-medium">
      <div className="bg-tab rounded-[60px] shadow-inner p-2 grid grid-cols-3 items-center w-[80%] lg:w-3/5 mx-auto justify-around">
        <div
          onClick={() => setTab(1)}
          className={`${
            tab === 1 &&
            "bg-white w-full rounded-[60px] py-3 xl:px-12 shadow-md "
          } cursor-pointer `}
        >
          About
        </div>
        <div
          onClick={() => setTab(2)}
          className={`${
            tab === 2 && "bg-white rounded-[60px] py-3 xl:px-12 shadow-md "
          } cursor-pointer `}
        >
          Stats
        </div>
        <div
          onClick={() => setTab(3)}
          className={`${
            tab === 3 && "bg-white rounded-[60px] py-3 xl:px-12 shadow-md "
          } cursor-pointer `}
        >
          Similar
        </div>
      </div>
    </div>
  );
};

export default Tabs;
