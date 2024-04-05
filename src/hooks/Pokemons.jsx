import { useEffect, useState } from 'react'
import { GET_POKEMONS_PREVIEW, GET_POKEMON_DETAIL, GET_POKEMON_BY_NAME, GET_TYPES_POKEMONS } from '@services/fetchingPokemons.js'
import toast from 'react-hot-toast'

export function useFetchPokemons () {
  const [loading, setLoading] = useState(false)
  const [pokemonsBase, setPokemonsBase] = useState()

  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true)
        const pokemonsToShowDefault = await GET_POKEMONS_PREVIEW()
        const promises = pokemonsToShowDefault.map(async pokemon => {
          const details = await GET_POKEMON_DETAIL(pokemon.url)
          return { name: pokemon.name, details }
        })
        const data = await Promise.all(promises)
        setPokemonsBase(data)
      } catch (error) {
        toast.error('Algo salió mal')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { loading, pokemonsBase }
}

export function usePokemonSearched (pokemon) {
  const [pokemonFinded, setPokemonFinded] = useState()
  const [searchTimeout, setSearchTimeout] = useState(null)

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    const timeout = setTimeout(async () => {
      try {
        if (pokemon) {
          const pokemonFindedAPI = await GET_POKEMON_BY_NAME(pokemon)
          setPokemonFinded([pokemonFindedAPI])
        } else {
          setPokemonFinded(undefined)
        }
      } catch (error) {
        toast.error('Algo salió mal al buscar el Pokémon')
      }
    }, 800)

    setSearchTimeout(timeout)

    return () => clearTimeout(timeout)
  }, [pokemon])

  return { pokemonFinded }
}

export function usePokemonTypes (typeSelected) {
  const [loadingTypes, setLoading] = useState()
  const [typesOfPokemons, setTypesOfPokemon] = useState()

  useEffect(() => {
    async function fetchData () {
      try {
        const typesOfPokemon = await GET_TYPES_POKEMONS()
        setTypesOfPokemon(typesOfPokemon.results)
      } catch (error) {
        toast.error('Hubo un error al encontrar los tipos')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {

  }, [typeSelected])

  return { loadingTypes, typesOfPokemons }
}
