import { CgDice5 } from 'react-icons/cg'
import Pokeball from '@assets/Pokeball.webp'
import Styles from './PokeHeader.module.css'

export function PokeHeader () {
  return (
    <header className={Styles.container}>
      <p style={{ fontSize: '1rem', fontWeight: '500' }}>Bienvenido de vuelta</p>
      <div style={{ borderRadius: '50%', width: '56px', backgroundColor: 'white' }}>
        <img src={Pokeball} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <p style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--textColor)' }}>Pulsa para descubrir</p>
        <CgDice5 style={{ fontSize: '1.2rem' }} />
      </div>
    </header>
  )
}
