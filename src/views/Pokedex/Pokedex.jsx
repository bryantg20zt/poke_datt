import { Button, Input, Spinner } from '@nextui-org/react'
import { useFetchPokemons } from '@hooks/PokemonsDefault'
import { TypePokemon } from '@components/PokeInfo/Types.jsx'
import { Pokemon } from '@components/PokeInfo/Card'
import { IoSearch } from 'react-icons/io5'
import Styles from './Pokedex.module.css'

export function Pokedex () {
  const { loading, pokemonsBase } = useFetchPokemons()

  if (loading) {
    return <main style={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner size='lg' /></main>
  }

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
