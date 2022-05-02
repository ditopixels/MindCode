import { FC } from 'react'
import {ReactComponent as MindCodeLogo} from '../../assets/logo.svg'
import Networks from '../Networks'
import './style.scss'

const Footer:FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-container'>
          <div className='logo'>
            <MindCodeLogo/>
          </div>
          <div>
            <legend>Vivir, aprender y subir de nivel día a día</legend>
            <Networks/>
          </div>
          <p>© MindCode 2022. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer