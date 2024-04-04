import { PokeHeader } from './components/PokeHeader'
import { PokeInfoSection } from './components/PokeInfoSection'
import Styles from './PokeRandom.module.css'

export function PokeRandom () {
  return (
    <main className={Styles.mainContainer}>
      <PokeHeader />
      <PokeInfoSection title='SQUIRTLE' />
    </main>
  )
}
