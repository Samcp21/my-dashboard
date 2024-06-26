import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { url } from "inspector";
import Image from "next/image";

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => {
    const urlParts = pokemon.url.split("/");
    const id = urlParts.at(-2)!;
    return { id, name: pokemon.name };
  });
  // throw new Error("Error al obtener los pokemons");
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemon();
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small>estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
