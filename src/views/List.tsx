/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { PokeMonDetail } from "../Interfaces/interfaces";
import PokeCard from "../component/PokeCard";
import { PokeContext, ThemeContext } from "../context/Context";
import { fetchPokemon } from "../feature/pokemon/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Pagination, Select } from "@mantine/core";
import { pokemonService } from "../services/pokemonService";
import { useQuery } from "react-query";

const List = () => {
  const { pokeTheme }: any = useContext(ThemeContext);

  const [pageNumber, setPageNumber] = useState<number>(0);
  const [, setPageSelector] = useState<string | null>("");

  const { pokeSearch }: any = useContext(PokeContext);
  const dispatch = useAppDispatch();
  const { pokemons, loading } = useAppSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemon(pokemons));
  }, [dispatch, pokemons, pokeTheme]);

  const getPokemon = useQuery({
    queryKey: ["get-pokemons"],
    queryFn: () => pokemonService.getPokemons(),
    enabled: true,
    onSuccess: () => {},
    refetchOnMount: "always",
    retryOnMount: true,
  });

  return (
    <div className="w-full h-full py-24 lg:py-32 px-12 lg:px-52 4xl:px-[30rem] ">
      <div className="absolute w-full h-full inset-0 bg-noise opacity-5 -z-10" />

      {loading ? (
        <div>LOADING....</div>
      ) : (
        <div className="flex flex-col gap-y-16 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-8  2xl:gap-y-20">
          {pokemons
            ?.filter((pokemon: PokeMonDetail) => {
              if (pokeSearch === "") {
                return <PokeCard key={pokemon.name} poke={pokemon} />;
              } else if (
                pokemon.name.toLowerCase().includes(pokeSearch.toLowerCase())
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
          color={pokeTheme}
          total={getPokemon?.data?.count}
          value={pageNumber + 1}
          onChange={(prevPageNumber) => setPageNumber(prevPageNumber - 1)}
        />

        <Select
          name="pageSelector"
          data={["8", "12", "16", "24"]}
          clearable
          defaultValue={"8"}
          clearButtonProps={{ "aria-label": "Clear selection" }}
          onChange={(value) => setPageSelector(value)}
        />
      </div>
    </div>
  );
};

export default List;
