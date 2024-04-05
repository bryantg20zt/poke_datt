import { Button, Input, Spinner } from '@nextui-org/react'
import { useFetchPokemons, usePokemonSearched, usePokemonTypes } from '@hooks/Pokemons'
import { TypePokemon } from '@components/PokeInfo/Types.jsx'
import { Pokemon } from '@components/PokeInfo/Card'
import { IoSearch } from 'react-icons/io5'
import Styles from './Pokedex.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function Pokedex () {
  const [pokemonSearched, setPokemonSearched] = useState()
  const [currentTypesSelected, setCurrentTypesSelected] = useState([])

  const { loading, pokemonsBase } = useFetchPokemons()
  const { pokemonFinded } = usePokemonSearched(pokemonSearched)
  const { loadingTypes, typesOfPokemons, pokemonsFiltered } = usePokemonTypes(currentTypesSelected)

  if (loading || loadingTypes) {
    return (
      <motion.main
        style={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Spinner size='lg' />
      </motion.main>
    )
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const typeVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  function handleFilterTypes (active, name) {
    if (currentTypesSelected.length > 0) {
      currentTypesSelected.some((type) => type === name) && active
        ? setCurrentTypesSelected(currentTypesSelected.filter((type) => type !== name))
        : setCurrentTypesSelected([...currentTypesSelected, name])
    } else {
      setCurrentTypesSelected([name])
    }
  }

  return (
    <motion.main
      className={Styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header className={Styles.containerHeader} variants={typeVariants} initial='hidden' animate='visible'>
        {typesOfPokemons
          ? typesOfPokemons.map((type) => (
            <TypePokemon key={type.name} name={type.name} handleAddToFilter={handleFilterTypes} />
          ))
          : <p>Todo normal</p>}
      </motion.header>
      <section className={Styles.containerBody}>
        <motion.div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
          <Button isIconOnly variant='solid' color='primary'>
            <IoSearch />
          </Button>
          <Input variant='bordered' placeholder='Pikachu' onChange={(event) => setPokemonSearched(event.target.value.toLowerCase())} />
        </motion.div>
        <section className={Styles.containerListPokemons}>
          {pokemonsFiltered.length > 0
            ? pokemonsFiltered.map((pokemon) => (
              <motion.div
                key={pokemon.details.id}
                variants={itemVariants}
                initial='hidden'
                animate='visible'
              >
                <Pokemon pokemon={pokemon} />
              </motion.div>
            ))
            : pokemonsBase && !pokemonFinded
              ? pokemonsBase.map((pokemon) => (
                <motion.div
                  key={pokemon.details.id}
                  variants={itemVariants}
                  initial='hidden'
                  animate='visible'
                >
                  <Pokemon pokemon={pokemon} />
                </motion.div>
              ))
              : pokemonFinded?.map((pokemon) => (
                <motion.div
                  key={pokemon.id}
                  variants={itemVariants}
                  initial='hidden'
                  animate='visible'
                >
                  <Pokemon pokemon={pokemon} />
                </motion.div>
              ))}
        </section>
      </section>
      <footer className={Styles.containerFooter} />
    </motion.main>
  )
}
