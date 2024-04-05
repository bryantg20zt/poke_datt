import { useEffect, useState } from 'react'
import { usePokemonSearched } from '@hooks/Pokemons'
import { PokeHeader } from './components/PokeHeader'
import { PokeInfoSection } from './components/PokeInfoSection'
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
    <main className={Styles.mainContainer} style={{ background: pokemonStyles.background }}>
      <PokeHeader handleChange={handleGetRandomID} />
      <img src={pokemonFinded ? pokemonFinded[0].sprites.other.home.front_default : ''} alt='Pokemon' />
      <div className={Styles.sectionInformation}>
        {pokemonFinded && pokemonFinded.length > 0
          ? (
            <>
              <section>
                <PokeInfoSection title={pokemonFinded[0] ? pokemonFinded[0].name.toUpperCase() : ''} type='pokemon' data={pokemonFinded[0]} color={pokemonStyles.color} />
                <PokeInfoSection title='Stats Base' type='stats' data={pokemonFinded[0]} color={pokemonStyles.color} />
              </section>
              <section>
                <PokeInfoSection title='Habilidades' type='abilities' data={pokemonFinded[0]} color={pokemonStyles.color} />
                <PokeInfoSection title='Fisionomia' type='fisio' data={pokemonFinded[0]} color={pokemonStyles.color} />
              </section>
            </>
            )
          : null}

      </div>
    </main>
  )
}
