import { useContext } from 'react'
import { UserContext } from '@contexts/UserContext.jsx'
import { Link, useLocation } from 'react-router-dom'
import { ItemNavigation } from './ItemNavigation'
import { RiHome3Line } from 'react-icons/ri'
import { LuLogOut } from 'react-icons/lu'
import { IoSearch } from 'react-icons/io5'
import { BsNintendoSwitch } from 'react-icons/bs'
import Styles from './Sidebar.module.css'

export function Sidebar () {
  const { setLogged } = useContext(UserContext)
  const location = useLocation()
  const activeNavigation = { color: 'white', backgroundColor: 'var(--primaryColor)' }
  const inactiveNavigation = { backgroundColor: 'white' }

  return (
    <div className={Styles.container}>
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
        <BsNintendoSwitch style={{ fontSize: '1.5rem', color: 'red' }} />
        <ul className={Styles.navigationList}>
          <li className={Styles.item} style={location.pathname === '/poke_datt/app/home' ? activeNavigation : inactiveNavigation}>
            <Link to='/poke_datt/app/home'>
              <ItemNavigation>
                <RiHome3Line style={{ fontSize: '1.5rem' }} />
              </ItemNavigation>
            </Link>
          </li>
          <li className={Styles.item} style={location.pathname === '/poke_datt/app/pokedex' ? activeNavigation : inactiveNavigation}>
            <Link to='/poke_datt/app/pokedex'>
              <ItemNavigation>
                <IoSearch style={{ fontSize: '1.5rem' }} />
              </ItemNavigation>
            </Link>
          </li>
        </ul>
      </section>
      <Link to='/poke_datt/auth' onClick={() => setLogged(false)}>
        <LuLogOut style={{ color: 'red' }} />
      </Link>
    </div>
  )
}
