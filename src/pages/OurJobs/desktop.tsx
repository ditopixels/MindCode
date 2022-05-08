import { FC } from 'react'
import Carousel from '../../components/Carousel'
import projects from '../../assets/ourProjects.json'
import './index.scss'
import ProjectCard from '../../components/ProjectCard'

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
				{projects.map(project=>(
					<div key={project.id}>
						<ProjectCard {...project}/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default OurJobsDesktop
