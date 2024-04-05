import { GET_COLOR_POKEMON } from '@services/colorPokemons.js'
import Styles from './Card.module.css'
import { useEffect, useState } from 'react'

export function Pokemon ({ pokemon }) {
  const [currentStyles, setCurrentStyles] = useState()
  useEffect(() => {
    if (pokemon.details) {
      const stylesPokemon = GET_COLOR_POKEMON(pokemon.details.types[0].type.name)
      setCurrentStyles(stylesPokemon)
    } else {
      const stylesPokemon = GET_COLOR_POKEMON(pokemon.types[0].type.name)
      setCurrentStyles(stylesPokemon)
    }
  }, [])
  return (
    <article className={Styles.container} style={currentStyles}>
      <div className={Styles.sectionNumber}>
        <span className={Styles.circleNumber}>
          {pokemon.details ? pokemon.details.id : pokemon.id}
        </span>
      </div>
      <img src={pokemon.details ? pokemon.details.sprites.other.home.front_default : pokemon.sprites.other.home.front_default} />
      <p className={Styles.sectionName}>{pokemon.name.toUpperCase()}</p>
    </article>
  )
}
