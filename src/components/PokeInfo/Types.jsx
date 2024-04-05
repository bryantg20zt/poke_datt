import { useEffect, useState } from 'react'
import { Tooltip } from '@nextui-org/react'
import { GET_STYLES_POKEMON } from '@services/colorPokemons'
import Styles from './Types.module.css'

export function TypePokemon ({ name, handleAddToFilter }) {
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
    if (active) {
      setActive(!active)
      handleAddToFilter(true, name)
    } else {
      setActive(!active)
      handleAddToFilter(false, name)
    }
  }
  return (
    <Tooltip showArrow content={<p className={Styles.nameType}>{name}</p>}>
      <div className={Styles.container} style={active && activeStyles ? activeStyles : {}} onClick={handleClick}>
        {currentStyles && currentStyles.icon}
      </div>
    </Tooltip>
  )
}
