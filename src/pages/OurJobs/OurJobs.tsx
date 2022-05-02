import { useDevice } from '../../hooks/useDevice'
import OurJobsMobile from './mobile'
import OurJobsDesktop from './desktop'

const OurJobs = () => {
	const { isMobile, isTablet } = useDevice()

	if (isMobile || isTablet) return <OurJobsMobile />
	else return <OurJobsDesktop />
}

export default OurJobs
