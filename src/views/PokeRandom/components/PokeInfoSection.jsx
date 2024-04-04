import { PokeStat } from '@components/PokeInfo/Stats.jsx'
import { IoIosWater } from 'react-icons/io'

export function PokeInfoSection ({ title }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        <PokeStat>
          <IoIosWater />
          <p>Agua</p>
        </PokeStat>
      </div>
    </section>
  )
}
