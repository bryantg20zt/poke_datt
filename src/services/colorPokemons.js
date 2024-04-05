import { pokemonTypes } from './stylesTypePokemons'

export function GET_COLOR_POKEMON (typePokemon) {
  const typeOfPokemon = pokemonTypes.find((type) => typePokemon === type.name)
  return typeOfPokemon ? { background: typeOfPokemon.background, color: 'white' } : ''
}
