import { CgDice5 } from 'react-icons/cg'
import Pokeball from '@assets/Pokeball.webp'
import Styles from './PokeHeader.module.css'
import { motion } from 'framer-motion'

export function PokeHeader ({ handleChange }) {
  return (
    <motion.header
      className={Styles.container}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p style={{ fontSize: '1rem', fontWeight: '500' }}>Bienvenido de vuelta</p>
      <motion.div
        style={{ borderRadius: '50%', width: '56px', backgroundColor: 'white' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={Pokeball} alt='Pokeball' />
      </motion.div>
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        onClick={handleChange}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <p style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--textColor)' }}>Pulsa para descubrir</p>
        <CgDice5 style={{ fontSize: '1.2rem' }} />
      </motion.div>
    </motion.header>
  )
}
