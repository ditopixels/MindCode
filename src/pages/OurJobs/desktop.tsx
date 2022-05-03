import { FC } from 'react'
import Carousel from '../../components/Carousel'
import './index.scss'

const OurJobsDesktop: FC = () => {
	return (
		<div style={{width:"90%",margin:"auto"}}>
			<Carousel
				className='swiper-container two'
				loop= {true}
				speed = {1000}
				autoplay = {{
					delay:3000
				}}
				effect = 'coverflow'
				grabCursor = {true}
				centeredSlides = {true}
				slidesPerView = 'auto'
				navigation={false}
				coverflowEffect = {{
					rotate: 0,
					stretch: 80,
					depth: 200,
					modifier: 1,
					slideShadows: false,
				}}
			>
				<img src="/proyecto-debarricas.png" alt=""/>
				<img src="/proyecto-dermatologica.png" alt=""/>
				<img src="/proyecto-grupomercury.png" alt=""/>
			</Carousel>
		</div>
	)
}

export default OurJobsDesktop
