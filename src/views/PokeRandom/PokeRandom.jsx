import { PokeHeader } from './components/PokeHeader'
import Styles from './PokeRandom.module.css'

export function PokeRandom () {
  return (
    <main className={Styles.mainContainer}>
      <PokeHeader />
    </main>
  )
}
