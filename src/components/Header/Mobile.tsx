import { FC } from 'react'
import {ReactComponent as MindCodeLogo} from '../../assets/logo.svg'
import {ReactComponent as MenuIcon} from '../../assets/menu-mobile.svg'

const HeaderMobile:FC = () => {
  return (
    <header className='header header-mobile'>
      <div className='header-mobile__wrapper'>
        <div className='logo'>
          <MindCodeLogo/>
        </div>
        <div className='menu'>
          <div className='menu-container'>
            <MenuIcon/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile