import { FC, useState } from 'react'
import {ReactComponent as MindCodeLogo} from '../../assets/logo.svg'
import {ReactComponent as MenuIcon} from '../../assets/menu-mobile.svg'
import Navigator from '../Navigator'

const HeaderMobile:FC = () => {

  const [open, setOpen] = useState<boolean>(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <header className={`header header-mobile ${open?'open':'close'}`}>
      <div className='header-mobile__wrapper'>
        <div className='logo'>
          <MindCodeLogo/>
        </div>

        <div className='menu'>
          <div className='menu-trigger' onClick={toggleMenu}>
            <MenuIcon/>
          </div>
        </div>
      </div>

      <div className='menu-container'>
          <Navigator/>
      </div>
    </header>
  )
}

export default HeaderMobile
