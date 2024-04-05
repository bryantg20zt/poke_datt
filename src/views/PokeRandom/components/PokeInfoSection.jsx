import { PokeStat } from '@components/PokeInfo/Stats.jsx'
import { IoIosWater } from 'react-icons/io'
import Styles from './PokeInfoSection.module.css'

function PokemonSection ({ title, type, data }) {
  console.log(data)
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        {
          data.types.map((type) => (
            <PokeStat key={type.id}>
              <IoIosWater />
              <p>{type.type.name}</p>
            </PokeStat>
          ))
        }
      </div>
    </section>
  )
}

function Stats ({ title, stats }) {
  console.log(stats)
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        {
          stats.map((stat) => (
            <PokeStat key={stat.stat.name}>
              <IoIosWater />
              <p>{stat.base_stat}</p>
            </PokeStat>
          ))
        }
      </div>
    </section>
  )
}

function Abilities ({ title, abilities }) {
  console.log(abilities)

  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        {
          abilities.map((ability) => (
            <PokeStat key={ability.ability.name}>
              <IoIosWater />
              <p>{ability.ability.name}</p>
            </PokeStat>
          ))
        }
      </div>
    </section>
  )
}

function PokeFisio ({ title, fisio }) {
  console.log(fisio)
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        <PokeStat>
          <IoIosWater />
          <p>{fisio.height} inch</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>{fisio.weight} kg</p>
        </PokeStat>
      </div>
    </section>
  )
}

export function PokeInfoSection ({ title, type, data }) {
  console.log(data)
  if (type === 'pokemon') return <PokemonSection title={title} data={data} />
  if (type === 'stats') return <Stats title={title} stats={data.stats} />
  if (type === 'abilities') return <Abilities title={title} abilities={data.abilities} />
  if (type === 'fisio') return <PokeFisio title={title} fisio={{ height: data.height, weight: data.weight }} />
}
