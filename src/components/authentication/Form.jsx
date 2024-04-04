import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { Divider } from '@misc/Dividers.jsx'
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLockClosed } from 'react-icons/io5'
import { FcGoogle } from 'react-icons/fc'
import Styles from './Form.module.css'

export function FormToFill ({ type }) {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  const registerNow = '¿No tienes cuenta?'
  const loginNow = '¿Ya tienes una cuenta?'

  const navigateToApp = () => navigate('/app/home')
  return (
    <form className={Styles.container}>
      <Input key='email' type='email' label='Email' labelPlacement='outside' placeholder='pikachu@pokeapi.com' startContent={<MdEmail style={{ color: 'var(--placeholderColor)' }} />} variant='bordered' />
      <Input
        key='password' type={visible ? 'text' : 'password'} label='Password' labelPlacement='outside' placeholder='Ingresa tu contraseña' startContent={<IoLockClosed style={{ color: 'var(--placeholderColor)' }} />} variant='bordered'
        endContent={
          <Button onClick={toggleVisibility} isIconOnly style={{ backgroundColor: 'transparent' }}>
            {
              visible ? <FaEyeSlash style={{ color: 'var(--placeholderColor)' }} /> : <FaEye style={{ color: 'var(--placeholderColor)' }} />
            }
          </Button>
         }
      />
      {type === 'login' ? <p className={Styles.passwordLost}>¿Olvidaste tu contraseña?</p> : ''}
      <Button color='primary' size='lg' onClick={navigateToApp}>
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
      <Link className={Styles.questionToRedirect} to={type === 'login' ? '/register' : '/auth'}>
        {type === 'login' ? registerNow : loginNow} <span className={Styles.linkToGo}>{type === 'login' ? 'Registrate' : 'Iniciar sesion'}</span>
      </Link>
    </form>
  )
}
