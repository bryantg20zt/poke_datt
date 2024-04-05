const API_URL = import.meta.env.VITE_API_URL

export async function GET_POKEMONS_PREVIEW () {
  const response = await fetch(`${API_URL}/pokemon`)
  const pokemons = await response.json()
  return pokemons.results
}

export async function GET_TYPES_POKEMONS () {
  const response = await fetch(`${API_URL}/type`)
  const typesPokemons = await response.json()
  return typesPokemons
}

export async function GET_POKEMONS_OF_TYPE (type) {
  const response = await fetch(`${API_URL}/type/${type}`)
  const pokemons = await response.json()
  return pokemons
}

export async function GET_POKEMON_BY_NAME (name) {
  const response = await fetch(`${API_URL}/pokemon/${name}`)
  const pokemon = await response.json()
  return pokemon
}

export async function GET_POKEMON_DETAIL (url) {
  const response = await fetch(url)
  const pokemon = await response.json()
  return pokemon
}
