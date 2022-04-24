import {ReactComponent as MindCodeLogo} from '../../assets/logo.svg'
import { useScrollWindow } from '../../hooks/useScrollWindow'
import Navigator from '../Navigator'

const HeaderDesktop = () => {
  
  const { isTop } = useScrollWindow()

  return (
    <header className={`header header-desktop ${isTop?'':'scroll'}`}>
      <div className='header-desktop__wrapper'>
        <div className='logo'>
          <MindCodeLogo/>
        </div>
        <div className='menu'>
          <Navigator/>
        </div>
      </div>
    </header>
  )
}

export default HeaderDesktop