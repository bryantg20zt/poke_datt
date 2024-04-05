import { PokeStat } from '@components/PokeInfo/Stats.jsx'
import { GET_STYLES_POKEMON, GET_STYLES_STATS } from '@services/colorPokemons'
import { MdHeight } from 'react-icons/md'
import { GrVulnerability } from 'react-icons/gr'
import { FaWeightHanging } from 'react-icons/fa'
import Styles from './PokeInfoSection.module.css'

function handleGETIconType (item, styles) {
  const typeStyleFinded = styles.find((styles) => styles.name === item)
  return typeStyleFinded.icon
}

function handleGETStyles (item, styles) {
  const typeStyleFinded = styles.find((styles) => styles.name === item)
  return { color: typeStyleFinded.colorIcon }
}

function PokemonSection ({ title, type, data, styles, color }) {
  console.log(color)
  return (
    <section>
      <h2 className={Styles.title} style={{ color }}>{title}</h2>
      <div className={Styles.containerItems}>
        {
          data.types.map((type) => (
            <PokeStat key={type.id} style={handleGETStyles(type.type.name, styles)}>
              {
                handleGETIconType(type.type.name, styles)
              }
              <p>{type.type.name}</p>
            </PokeStat>
          ))
        }
      </div>
    </section>
  )
}

function Stats ({ title, stats, styles, color }) {
  console.log(stats)
  return (
    <section>
      <h2 className={Styles.title} style={{ color }}>{title}</h2>
      <div className={Styles.containerItems}>
        {
          stats.map((stat) => (
            <PokeStat key={stat.stat.name}>
              {handleGETIconType(stat.stat.name, styles)}
              <p>{stat.base_stat}</p>
            </PokeStat>
          ))
        }
      </div>
    </section>
  )
}

function Abilities ({ title, abilities, color }) {
  console.log(abilities)

  return (
    <section>
      <h2 className={Styles.title} style={{ color }}>{title}</h2>
      <div className={Styles.containerItems}>
        {
          abilities.map((ability) => (
            <PokeStat key={ability.ability.name}>
              <GrVulnerability style={{ color: '#ffa500' }} />
              <p>{ability.ability.name}</p>
            </PokeStat>
          ))
        }
      </div>
    </section>
  )
}

function PokeFisio ({ title, fisio, color }) {
  console.log(fisio)
  return (
    <section>
      <h2 className={Styles.title} style={{ color }}>{title}</h2>
      <div className={Styles.containerItems}>
        <PokeStat>
          <MdHeight />
          <p>{fisio.height} inch</p>
        </PokeStat>
        <PokeStat>
          <FaWeightHanging />
          <p>{fisio.weight} kg</p>
        </PokeStat>
      </div>
    </section>
  )
}

export function PokeInfoSection ({ title, type, data, color }) {
  const stylesTypes = []
  const stylesStats = []

  data.types.forEach(type => {
    const stylesPokemon = GET_STYLES_POKEMON(type.type.name)
    stylesTypes.push(stylesPokemon)
  })

  data.stats.forEach(stat => {
    const stylesStatsSingle = GET_STYLES_STATS(stat.stat.name)
    stylesStats.push(stylesStatsSingle)
  })

  if (type === 'pokemon') return <PokemonSection title={title} data={data} styles={stylesTypes} color={color} />
  if (type === 'stats') return <Stats title={title} stats={data.stats} styles={stylesStats} color={color} />
  if (type === 'abilities') return <Abilities title={title} abilities={data.abilities} color={color} />
  if (type === 'fisio') return <PokeFisio title={title} fisio={{ height: data.height, weight: data.weight }} color={color} />
}
