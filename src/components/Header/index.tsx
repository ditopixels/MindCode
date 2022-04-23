import { useDevice } from '../../hooks/useDevice'
import HeaderDesktop from './Desktop'
import HeaderMobile from './Mobile'
import './styles.scss'

const Header = () => {
  const { isMobile, isTablet} = useDevice()

  if(isMobile || isTablet) return <HeaderMobile/>
  else return <HeaderDesktop/>
}

export default Header