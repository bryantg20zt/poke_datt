import { useEffect, useState } from 'react'
import { usePokemonSearched } from '@hooks/Pokemons'
import { PokeHeader } from './components/PokeHeader'
import { PokeInfoSection } from './components/PokeInfoSection'
import { motion } from 'framer-motion'
import Styles from './PokeRandom.module.css'

export function PokeRandom () {
  const [randomPokemon, setRandomPokemon] = useState(0)
  const { pokemonFinded, pokemonStyles } = usePokemonSearched(randomPokemon)

  useEffect(() => {
    handleGetRandomID()
  }, [])

  function handleGetRandomID () {
    const ID = Math.floor(Math.random() * (1008 - 1 + 1)) + 1
    setRandomPokemon(ID)
  }

  return (
    <motion.main className={Styles.mainContainer} style={{ background: pokemonStyles.background, opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <PokeHeader handleChange={handleGetRandomID} />
      <motion.div className={Styles.imageContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {!pokemonFinded && <div className={Styles.placeholder} />}
        {pokemonFinded && pokemonFinded.length === 1 && (
          <motion.img
            key={pokemonFinded[0].id}
            src={pokemonFinded[0].sprites.other.home.front_default}
            alt='Pokemon'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.div>
      <motion.div className={Styles.sectionInformation}>
        {pokemonFinded && pokemonFinded.length === 1 && (
          <>
            <motion.section key='sectionLeft' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <PokeInfoSection key={pokemonFinded[0].id + 'I'} title={pokemonFinded[0].name.toUpperCase()} type='pokemon' data={pokemonFinded[0]} color={pokemonStyles.color} />
              <PokeInfoSection key={pokemonFinded[0].id + 'S'} title='Stats Base' type='stats' data={pokemonFinded[0]} color={pokemonStyles.color} />
            </motion.section>
            <motion.section key='sectionRight' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <PokeInfoSection key={pokemonFinded[0].id + 'A'} title='Habilidades' type='abilities' data={pokemonFinded[0]} color={pokemonStyles.color} />
              <PokeInfoSection key={pokemonFinded[0].id + 'F'} title='Fisionomia' type='fisio' data={pokemonFinded[0]} color={pokemonStyles.color} />
            </motion.section>
          </>
        )}
      </motion.div>
    </motion.main>
  )
}
