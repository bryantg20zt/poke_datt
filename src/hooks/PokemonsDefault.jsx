import { useEffect, useState } from 'react'
import { GET_POKEMONS_PREVIEW, GET_POKEMON_DETAIL } from '@services/fetchingPokemons.js'
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
