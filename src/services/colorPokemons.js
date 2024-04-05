import { pokemonTypes } from './stylesTypePokemons'

export function GET_COLOR_POKEMON (typePokemon) {
  const typeOfPokemon = pokemonTypes.find((type) => typePokemon === type.name)
  return typeOfPokemon ? { background: typeOfPokemon.background, color: typeOfPokemon.color } : ''
}

export function GET_STYLES_POKEMON (typeOfPokemon) {
  const stylesPokemon = pokemonTypes.find((type) => typeOfPokemon === type.name)
  return stylesPokemon || null
}
