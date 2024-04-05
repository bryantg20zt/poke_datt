import { useState, useContext } from 'react'
import { UserContext } from '@contexts/UserContext.jsx'
import { AccountsContext } from '@contexts/AccountsContext.jsx'
import { API_LOGIN } from '@services/auth'
import { Button, Input } from '@nextui-org/react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Divider } from '@misc/Dividers.jsx'
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLockClosed } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import Styles from './Form.module.css'

export function FormToFill ({ type }) {
  const { setLogged } = useContext(UserContext)
  const { accounts, setAccounts } = useContext(AccountsContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)
  const registerNow = '¿No tienes cuenta?'
  const loginNow = '¿Ya tienes una cuenta?'

  function handleAuth () {
    if (location.pathname === '/poke_datt/auth') {
      const response = API_LOGIN({ email, password }, accounts)
      if (response.status === 200) {
        setLogged(true)
        navigate('/poke_datt/app/home')
      } else {
        toast.error(response.message)
      }
    } else if (location.pathname === '/poke_datt/register') {
      setAccounts([...accounts, { email, password }])
      toast.success('Bievenido a la familia!')
      navigate('/poke_datt/auth')
    }
  }

  return (
    <form className={Styles.container}>
      <Input key='email' type='email' label='Email' labelPlacement='outside' placeholder='pikachu@pokeapi.com' startContent={<MdEmail style={{ color: 'var(--placeholderColor)' }} />} variant='bordered' onChange={(event) => setEmail(event.target.value.toLowerCase())} onKeyDown={(event) => event.key === 'Enter' ? handleAuth() : null} />
      <Input
        key='password' type={visible ? 'text' : 'password'} label='Password' labelPlacement='outside' placeholder='Ingresa tu contraseña' startContent={<IoLockClosed style={{ color: 'var(--placeholderColor)' }} />} variant='bordered'
        endContent={
          <Button onClick={toggleVisibility} isIconOnly style={{ backgroundColor: 'transparent' }}>
            {
              visible ? <FaEyeSlash style={{ color: 'var(--placeholderColor)' }} /> : <FaEye style={{ color: 'var(--placeholderColor)' }} />
            }
          </Button>
         }
        onChange={(event) => setPassword(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' ? handleAuth() : null}
      />
      {type === 'login' ? <p className={Styles.passwordLost}>¿Olvidaste tu contraseña?</p> : ''}
      <Button color='primary' size='lg' onClick={handleAuth}>
        {type === 'login' ? 'Iniciar Sesion' : 'Registrarme'}
      </Button>
      <div className={Styles.dividerSection}>
        <Divider />
        <span>Otras alternativas</span>
        <Divider />
      </div>
      <section className={Styles.buttonsAlternativesSection}>
        <Button variant='ghost' style={{ width: '30%' }}><FcGoogle />Google</Button>
        <Button variant='ghost' style={{ width: '30%' }}><FaFacebook style={{ color: 'var(--primaryColor)' }} />Facebook</Button>
      </section>
      <Link className={Styles.questionToRedirect} to={type === 'login' ? '/poke_datt/register' : '/poke_datt/auth'}>
        {type === 'login' ? registerNow : loginNow} <span className={Styles.linkToGo}>{type === 'login' ? 'Registrate' : 'Iniciar sesion'}</span>
      </Link>
    </form>
  )
}
