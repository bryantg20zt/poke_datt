import { FormToFill } from '@components/authentication/Form.jsx'
import LogoPokemon from '@assets/pokemon.webp'
import LandingSide from '@assets/landingRegister.webp'
import Styles from './Register.module.css'

export function Register () {
  return (
    <main className={Styles.container}>
      <section className={Styles.landingSide}>
        <img src={LandingSide} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </section>
      <section className={Styles.formSide}>
        <img src={LogoPokemon} width={192} />
        <header style={{ width: '60%' }}>
          <h1>Unete a la familia!</h1>
          <p className={Styles.subtitle}>Registrate para acceder a la PokeApp.</p>
        </header>
        <FormToFill type='register' />
      </section>
    </main>
  )
}
