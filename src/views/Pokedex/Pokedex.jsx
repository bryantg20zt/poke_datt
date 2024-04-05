import { useEffect, useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { TypePokemon } from '@components/PokeInfo/Types.jsx'
import { Pokemon } from '@components/PokeInfo/Card'
import { GET_POKEMONS_PREVIEW, GET_POKEMON_DETAIL } from '@services/fetchingPokemons.js'
import { IoSearch } from 'react-icons/io5'
import Styles from './Pokedex.module.css'
import toast from 'react-hot-toast'

export function Pokedex () {
  const [loading, setLoading] = useState(false)
  const [pokemonsBase, setPokemonsBase] = useState()
  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true) // Establece loading en true para mostrar el indicador de carga
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
  return (
    <main className={Styles.container}>
      <header className={Styles.containerHeader}>
        <TypePokemon />
      </header>
      <section className={Styles.containerBody}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button isIconOnly variant='solid' color='primary'><IoSearch /></Button>
          <Input variant='bordered' placeholder='Pikachu' />
        </div>
        <section className={Styles.containerListPokemons}>
          {
            pokemonsBase
              ? pokemonsBase.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)
              : <p>No hay nada</p>
          }
        </section>
      </section>
      <footer className={Styles.containerFooter} />
    </main>
  )
}
