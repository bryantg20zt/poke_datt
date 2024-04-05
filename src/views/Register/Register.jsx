import { motion } from 'framer-motion'
import { FormToFill } from '@components/authentication/Form.jsx'
import LogoPokemon from '@assets/pokemon.webp'
import LandingSide from '@assets/landingRegister.webp'
import Styles from './Register.module.css'

export function Register () {
  return (
    <motion.main className={Styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.section className={Styles.landingSide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <motion.img src={LandingSide} style={{ objectFit: 'cover', width: '100%', height: '100%' }} alt='Landing Side' />
      </motion.section>
      <motion.section className={Styles.formSide} initial={{ opacity: 0, x: '-20px' }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}>
        <img src={LogoPokemon} width={192} alt='Pokemon Logo' />
        <header style={{ width: '60%' }}>
          <h1>Únete a la familia!</h1>
          <p className={Styles.subtitle}>Regístrate para acceder a la PokeApp.</p>
        </header>
        <FormToFill type='register' />
      </motion.section>
    </motion.main>
  )
}
