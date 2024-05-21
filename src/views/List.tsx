/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select } from "@mantine/core";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { PokeMon, PokeMonDetail } from "../Interfaces/interfaces";
import Pagination from "../component/Pagination";
import PokeCard from "../component/PokeCard";
import { PokeContext } from "../context/Context";
import { pokemonService } from "../services/pokemonService";

const List = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [limit, setLimit] = useState<number>(8);

  const { pokeSearch }: any = useContext(PokeContext);
  const [pokemons, setPokemons] = useState<PokeMon[]>([]);
  const [loading, setLoading] = useState(true);

  const handlePrevClick = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };
  const handleNextClick = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const getPokemon = useQuery({
    queryKey: ["get-pokemons", pageNumber, limit],
    queryFn: () =>
      pokemonService.getPokemons({
        limit: limit,
        offSet: (pageNumber - 1) * limit,
      }),
    enabled: true,
    onSuccess: (data) => {
      setPokemons(data.results);
    },
    keepPreviousData: false,
  });

  const getAllPokemon = useQuery({
    queryKey: ["get-all-pokemons", pokemons],
    queryFn: () => pokemonService.getPokemon(pokemons),
    enabled: true,
    onSuccess: () => {
      setLoading(false);
    },

    keepPreviousData: false,
  });

  getPokemon;
  return (
    <div className="w-full h-full py-24 lg:py-32 px-12 lg:px-52 4xl:px-[30rem] ">
      <div className="absolute w-full h-full inset-0 bg-noise opacity-5 -z-10" />

      {loading ? (
        <div>LOADING....</div>
      ) : (
        <div className="flex flex-col gap-y-16 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-8  2xl:gap-y-20">
          {getAllPokemon?.data
            ?.filter((pokemon: PokeMonDetail) => {
              if (pokeSearch === "") {
                return <PokeCard key={pokemon.name} poke={pokemon} />;
              } else if (
                pokemon?.name?.toLowerCase()?.includes(pokeSearch.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            ?.map((pokemon: PokeMonDetail) => {
              return <PokeCard key={pokemon.name} poke={pokemon} />;
            })}
        </div>
      )}
      <div className="flex justify-between my-16">
        <Pagination
          page={pageNumber}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
        <Select
          name="pageSelector"
          data={["8", "12", "16", "24"]}
          clearable
          defaultValue={limit.toString()}
          clearButtonProps={{ "aria-label": "Clear selection" }}
          onChange={(value) => {
            if (value !== null) setLimit(parseInt(value));
          }}
        />
      </div>
    </div>
  );
};

export default List;
