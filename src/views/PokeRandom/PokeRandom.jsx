import { PokeHeader } from './components/PokeHeader'
import { PokeInfoSection } from './components/PokeInfoSection'
import Styles from './PokeRandom.module.css'

export function PokeRandom () {
  return (
    <main className={Styles.mainContainer}>
      <PokeHeader />
      <div className={Styles.sectionInformation}>
        <section>
          <PokeInfoSection title='Squirtle' type='pokemon' />
          <PokeInfoSection title='Stats Base' type='stats' />
        </section>
        <section>
          <PokeInfoSection title='Habilidades' type='abilities' />
          <PokeInfoSection title='Fisionomia' type='fisio' />
        </section>
      </div>
    </main>
  )
}
