import { Button, Input, Spinner } from '@nextui-org/react'
import { useFetchPokemons, usePokemonSearched, usePokemonTypes } from '@hooks/Pokemons'
import { TypePokemon } from '@components/PokeInfo/Types.jsx'
import { Pokemon } from '@components/PokeInfo/Card'
import { IoSearch } from 'react-icons/io5'
import Styles from './Pokedex.module.css'
import { useState } from 'react'

export function Pokedex () {
  const [pokemonSearched, setPokemonSearched] = useState()
  const [currentTypesSelected, setCurrentTypesSelected] = useState([])

  const { loading, pokemonsBase } = useFetchPokemons()
  const { pokemonFinded } = usePokemonSearched(pokemonSearched)
  const { loadingTypes, typesOfPokemons, pokemonsFiltered } = usePokemonTypes(currentTypesSelected)
  // console.log(pokemonsFiltered)

  if (loading || loadingTypes) {
    return <main style={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner size='lg' /></main>
  }

  function handleFilterTypes (active, name) {
    // console.log(currentTypesSelected)
    if (currentTypesSelected.length > 0) {
      currentTypesSelected.some((type) => type === name) && active
        ? setCurrentTypesSelected(currentTypesSelected.filter((type) => type !== name))
        : setCurrentTypesSelected([...currentTypesSelected, name])
    } else {
      setCurrentTypesSelected([name])
    }
  }

  return (
    <main className={Styles.container}>
      <header className={Styles.containerHeader}>
        {
          typesOfPokemons
            ? typesOfPokemons.map((type) => <TypePokemon key={type.name} name={type.name} handleAddToFilter={handleFilterTypes} />)
            : <p>Todo normal</p>
        }
      </header>
      <section className={Styles.containerBody}>
        <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
          <Button isIconOnly variant='solid' color='primary'><IoSearch /></Button>
          <Input variant='bordered' placeholder='Pikachu' onChange={(event) => setPokemonSearched(event.target.value.toLowerCase())} />
        </div>
        <section className={Styles.containerListPokemons}>
          {
            pokemonsFiltered.length > 0
              ? pokemonsFiltered.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.details.id} />)
              : pokemonsBase && !pokemonFinded
                ? pokemonsBase.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.details.id} />)
                : pokemonFinded?.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)
          }
        </section>
      </section>
      <footer className={Styles.containerFooter} />
    </main>
  )
}
