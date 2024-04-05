import Styles from './Card.module.css'

export function Pokemon ({ pokemon }) {
  console.log(pokemon)
  return (
    <article className={Styles.container}>
      <span className={Styles.sectionNumber}>{pokemon.details.id}</span>
      <img src={pokemon.details.sprites.other.home.front_default} style={{ width: '90%' }} />
      <p className={Styles.sectionName}>{pokemon.name}</p>
    </article>
  )
}
