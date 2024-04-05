import { GET_STYLES_POKEMON } from '@services/colorPokemons'
import Styles from './Types.module.css'
import { useEffect, useState } from 'react'

export function TypePokemon ({ name }) {
  const [currentStyles, setCurrentStyles] = useState()
  const [activeStyles, setActiveStyles] = useState({ background: 'white' })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const stylesToShow = GET_STYLES_POKEMON(name)
    const background = { background: stylesToShow.background, color: stylesToShow.color }
    setActiveStyles(background)
    setCurrentStyles(stylesToShow)
  }, [name])

  function handleClick () {
    setActive(!active)
  }
  return (
    <div className={Styles.container} style={active && activeStyles ? activeStyles : {}} onClick={handleClick}>
      {currentStyles && currentStyles.icon}
      <p className={Styles.nameType}>{name}</p>
    </div>
  )
}
