import { useEffect, useState } from 'react'
import { GET_POKEMONS_PREVIEW, GET_POKEMON_DETAIL, GET_POKEMON_BY_NAME, GET_TYPES_POKEMONS, GET_POKEMONS_OF_TYPE } from '@services/fetchingPokemons.js'
import toast from 'react-hot-toast'
import { GET_STYLES_POKEMON } from '../services/colorPokemons'

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
  const [pokemonStyles, setPokemonStyles] = useState('')

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    const timeout = setTimeout(async () => {
      try {
        if (pokemon) {
          const pokemonFindedAPI = await GET_POKEMON_BY_NAME(pokemon)
          setPokemonFinded([pokemonFindedAPI])
          const stylesFromPokemon = GET_STYLES_POKEMON(pokemonFindedAPI.types[0].type.name)
          setPokemonStyles(stylesFromPokemon)
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

  return { pokemonFinded, pokemonStyles }
}

export function usePokemonTypes (typeSelected) {
  const [beforeTypesOfPokemons, setBeforeTypesOfPokemons] = useState([])
  const [loadingTypes, setLoading] = useState()
  const [typesOfPokemons, setTypesOfPokemon] = useState()
  const [pokemonsFiltered, setPokemonsFiltered] = useState([])

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
    async function fetchData () {
      try {
        if (pokemonsFiltered.length === 0 && typeSelected.length > 0) {
          const pokemonsType = await GET_POKEMONS_OF_TYPE(typeSelected[0])
          const promises = pokemonsType.pokemon.map(async item => {
            const details = await GET_POKEMON_DETAIL(item.pokemon.url)
            return { name: item.pokemon.name, details }
          })
          const data = await Promise.all(promises)
          setPokemonsFiltered(data)
          setBeforeTypesOfPokemons(typeSelected)
        } else if (pokemonsFiltered.length > 0 && typeSelected.length > beforeTypesOfPokemons.length) {
          const newTypeToAdd = typeSelected.filter(type => !beforeTypesOfPokemons.includes(type))
          const pokemonsType = await GET_POKEMONS_OF_TYPE(newTypeToAdd[0])
          const promises = pokemonsType.pokemon.map(async item => {
            const details = await GET_POKEMON_DETAIL(item.pokemon.url)
            return { name: item.pokemon.name, details }
          })
          const data = await Promise.all(promises)
          const uniqueNewData = data.filter(newPokemon => {
            return !pokemonsFiltered.some(existingPokemon => existingPokemon.details.id === newPokemon.details.id)
          })
          setPokemonsFiltered(beforeArray => [...beforeArray, ...uniqueNewData])
          setBeforeTypesOfPokemons(typeSelected)
        } else {
          const newPokemons = []
          typeSelected.forEach(type => {
            const listToAdd = pokemonsFiltered.filter((pokemon) => pokemon.details.types[0].type.name === type)
            newPokemons.push(...listToAdd)
          })
          setPokemonsFiltered(newPokemons)
          setBeforeTypesOfPokemons(typeSelected)
        }
      } catch (error) {
        toast.error('Hubo un error en la obtencion de los Pokemon')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [typeSelected])

  return { loadingTypes, typesOfPokemons, pokemonsFiltered }
}
