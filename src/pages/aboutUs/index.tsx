import React from 'react'

import { useDevice } from '../../hooks/useDevice'
import AboutMobile from './Mobile'
import AboutDesktop from './Desktop'

const AboutUs = () => {
	const { isMobile, isTablet } = useDevice()

	if (isMobile || isTablet) return <AboutMobile />
	else return <AboutDesktop />
}

export default AboutUs
