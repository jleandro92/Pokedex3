import PokemonPreview from "./PokemonPreview"

const PokemonsList = ({pokemons}) => {
    
  return (
    <section>
        {
            pokemons.map(pokemon => (
                <PokemonPreview key={pokemon.url} 
                pokemonURL={pokemon.url} />
            ))
        }
    </section>
  )
}
export default PokemonsList