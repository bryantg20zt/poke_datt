import { usePokemonSearched } from '@hooks/Pokemons'
import { PokeHeader } from './components/PokeHeader'
import { PokeInfoSection } from './components/PokeInfoSection'
import Styles from './PokeRandom.module.css'
import { useEffect, useState } from 'react'

export function PokeRandom () {
  const [randomPokemon, setRandomPokemon] = useState(0)
  const { pokemonFinded } = usePokemonSearched(randomPokemon)

  useEffect(() => {
    const randomID = handleGetRandomID(1, 1008)
    console.log(randomID)
    setRandomPokemon(randomID)
  }, [])

  function handleGetRandomID (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <main className={Styles.mainContainer}>
      <PokeHeader />
      <div className={Styles.sectionInformation}>
        {pokemonFinded && pokemonFinded.length > 0
          ? (
            <>
              <section>
                <PokeInfoSection title={pokemonFinded[0] ? pokemonFinded[0].name.toUpperCase() : ''} type='pokemon' data={pokemonFinded[0]} />
                <PokeInfoSection title='Stats Base' type='stats' data={pokemonFinded[0]} />
              </section>
              <section>
                <PokeInfoSection title='Habilidades' type='abilities' data={pokemonFinded[0]} />
                <PokeInfoSection title='Fisionomia' type='fisio' data={pokemonFinded[0]} />
              </section>
            </>
            )
          : null}

      </div>
    </main>
  )
}
