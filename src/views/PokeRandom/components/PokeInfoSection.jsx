import { PokeStat } from '@components/PokeInfo/Stats.jsx'
import { IoIosWater } from 'react-icons/io'
import Styles from './PokeInfoSection.module.css'

function PokemonSection ({ title, pokemon }) {
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        <PokeStat>
          <IoIosWater />
          <p>Agua</p>
        </PokeStat>
      </div>
    </section>
  )
}

function Stats ({ title, stats }) {
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
      </div>
    </section>
  )
}

function Abilities ({ title }) {
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>39</p>
        </PokeStat>
      </div>
    </section>
  )
}

function PokeFisio ({ title }) {
  return (
    <section>
      <h2 className={Styles.title}>{title}</h2>
      <div className={Styles.containerItems}>
        <PokeStat>
          <IoIosWater />
          <p>6 inch</p>
        </PokeStat>
        <PokeStat>
          <IoIosWater />
          <p>80 kg</p>
        </PokeStat>
      </div>
    </section>
  )
}

export function PokeInfoSection ({ title, type }) {
  if (type === 'pokemon') return <PokemonSection title={title} />
  if (type === 'stats') return <Stats title={title} />
  if (type === 'abilities') return <Abilities title={title} />
  if (type === 'fisio') return <PokeFisio title={title} />
}
