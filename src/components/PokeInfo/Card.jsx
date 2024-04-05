import { GET_COLOR_POKEMON } from '@services/colorPokemons.js'
import Styles from './Card.module.css'

export function Pokemon ({ pokemon }) {
  // console.log(pokemon.types)
  const stylesPokemon = GET_COLOR_POKEMON(pokemon.details.types[0].type.name)
  return (
    <article className={Styles.container} style={stylesPokemon}>
      <div className={Styles.sectionNumber}>
        <span className={Styles.circleNumber}>
          {pokemon.details.id}
        </span>
      </div>
      <img src={pokemon.details.sprites.other.home.front_default} />
      <p className={Styles.sectionName}>{pokemon.name}</p>
    </article>
  )
}
