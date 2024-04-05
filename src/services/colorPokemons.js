import { pokemonTypes, pokemonStats } from './stylesTypePokemons'

export function GET_COLOR_POKEMON (typePokemon) {
  const typeOfPokemon = pokemonTypes.find((type) => typePokemon === type.name)
  return typeOfPokemon ? { background: typeOfPokemon.background, color: typeOfPokemon.color } : ''
}

export function GET_STYLES_POKEMON (typeOfPokemon) {
  const stylesPokemon = pokemonTypes.find((type) => typeOfPokemon === type.name)
  return stylesPokemon || null
}

export function GET_STYLES_STATS (statToFind) {
  const stylesStats = pokemonStats.find((stat) => statToFind === stat.name)
  return stylesStats || null
}
