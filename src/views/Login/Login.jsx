import { motion } from 'framer-motion'
import { FormToFill } from '@components/authentication/Form.jsx'
import { PokeStat } from '@components/PokeInfo/Stats.jsx'
import LogoPokemon from '@assets/pokemon.webp'
import Squirtle from '@assets/landingSquirtle.webp'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { FaWeightHanging } from 'react-icons/fa'
import { MdWaterDrop } from 'react-icons/md'
import { GiTurtleShell, GiPunch } from 'react-icons/gi'
import Styles from './Login.module.css'
import { Link } from 'react-router-dom'

export function Login () {
  return (
    <motion.main className={Styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.section className={Styles.landingSide} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 120 }}>
        <img src={LogoPokemon} width={192} alt='Pokemon Logo' />
        <div className={Styles.containerFloating}>
          <motion.section className={Styles.sectionFloating} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <PokeStat style={{ position: 'relative', top: '130px', rotate: '12deg' }}>
              <FaWeightHanging />
              <p>6,25 Kg</p>
            </PokeStat>
            <PokeStat style={{ rotate: '-24deg' }}>
              <GiTurtleShell style={{ color: 'orange' }} />
              <p>Squirtle</p>
            </PokeStat>
            <PokeStat style={{ position: 'relative', left: '150px', top: '20px', rotate: '12deg' }}>
              <MdWaterDrop style={{ color: '#1877F2' }} />
              <p>Tipo Agua</p>
            </PokeStat>
            <PokeStat style={{ position: 'relative', left: '40px', top: '180px', rotate: '40deg' }}>
              <GiPunch style={{ color: 'orange' }} />
              <p>Torrent Attack</p>
            </PokeStat>
          </motion.section>
          <motion.img src={Squirtle} width={450} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} alt='Squirtle' />
        </div>
        <footer className={Styles.bottomRegister}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 className={Styles.titleRegister}>Registrate</h4>
            <Link to='/poke_datt/register'>
              <IoArrowForwardOutline style={{ cursor: 'pointer' }} />
            </Link>
          </div>
          <p className={Styles.subtitleRegister}>Encuentra tu Pokemon favorito!</p>
        </footer>
      </motion.section>
      <motion.section className={Styles.formSide} initial={{ opacity: 0, x: '-20px' }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}>
        <header style={{ width: '60%' }}>
          <h1>Bienvenido!</h1>
          <p className={Styles.subtitleLogin}>Inicia sesión para acceder a la PokeApp.</p>
        </header>
        <FormToFill type='login' />
      </motion.section>
    </motion.main>
  )
}
