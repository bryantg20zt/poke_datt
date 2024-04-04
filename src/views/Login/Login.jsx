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
    <main className={Styles.container}>
      <section className={Styles.landingSide}>
        <img src={LogoPokemon} width={192} />
        <div className={Styles.containerFloating}>
          <section className={Styles.sectionFloating}>
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
          </section>
          <img src={Squirtle} width={450} />
        </div>
        <footer className={Styles.bottomRegister}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 className={Styles.titleRegister}>Registrate</h4>
            <Link to='/register'>
              <IoArrowForwardOutline style={{ cursor: 'pointer' }} />
            </Link>
          </div>
          <p className={Styles.subtitleRegister}>Encuentra tu Pokemon favorito!</p>
        </footer>
      </section>
      <section className={Styles.formSide}>
        <header style={{ width: '60%' }}>
          <h1>Bienvenido!</h1>
          <p className={Styles.subtitleLogin}>Inicia sesion para acceder a la PokeApp.</p>
        </header>
        <FormToFill type='login' />
      </section>
    </main>
  )
}
