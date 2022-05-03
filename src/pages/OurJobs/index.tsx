import { useDevice } from '../../hooks/useDevice'
import OurJobsMobile from './mobile'
import OurJobsDesktop from './desktop'

const OurJobs = () => {
	const { isMobile, isTablet, isDesktop, isLaptop } = useDevice()

	return (
		<div id='ourjobs'>
			<h2>Nuestros trabajos</h2>
			<p>? Haz click para ver más sobre el proyecto.</p>
			<div>
				{(isMobile || isTablet) && <OurJobsMobile/>}
				{(isDesktop || isLaptop) && <OurJobsDesktop/>}
			</div>
		</div>
	)
}

export default OurJobs
