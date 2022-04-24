import React from 'react'

import './index.scss'
import Entregas from '../../assets/entregas.svg'
import Rocket from '../../assets/rocket.svg'
import Money from '../../assets/money.svg'

const AboutUs = () => {
	return (
		<div className="about-container">
			<img src={require('../../assets/aboutImage.png')} alt="About Us" />

			<div className="about-text-container">
				<h2>Conócenos</h2>
				<p>
					Nuestra misión es expandir tú negocio a través de internet y aumentar
					tus ingresos. Usando tecnologías de última generación, así logramos
					nuestros objetivos.
				</p>

				<div className="about-text-options-container">
					<div className="options options-1">
						<img src={Entregas} alt="Entregas imagen" />
						<p>Entregas en el mejor tiempo y de calidad</p>
					</div>
					<div className="options options-2">
						<img src={Rocket} alt="Cohete imagen" />
						<p>Experiencia y calidad para despegar tu proyecto</p>
					</div>
					<div className="options options-3">
						<img src={Money} alt="Dinero imagen" />
						<p>Precios accesibles y personalizados</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
