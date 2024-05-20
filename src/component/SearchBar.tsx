import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { PokeContext } from "../context/Context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const { setPokeSearch } = useContext(PokeContext);
  const navigate = useNavigate();

  const getPoke = (value: string) => {
    setPokeSearch(value);
    console.log(value);
    navigate("/listview");
  };

  return (
    <div className="search">
      <input
        onChange={(event) => setSearch(event.target.value)}
        type="text"
        placeholder="Enter pokeman name"
        className="lg:text-2xl w-4/5 lg:w-3/4 focus:outline-none bg-transparent"
      />
      <div className="cursor-pointer hover:shadow-2xl w-10 h-10 lg:w-12 lg:h-12 m-1 lg:m-2 bg-skin-base rounded-full lg:shadow-md flex justify-center items-center">
        <MagnifyingGlassIcon
          onClick={() => getPoke(search)}
          className="w-5 text-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
