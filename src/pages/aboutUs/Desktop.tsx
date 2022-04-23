import React from 'react'
import './index.scss'

const AboutDesktop = () => {
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
						<img
							src={require('../../assets/entregas.svg')}
							alt="Entregas imagen"
						/>
						<p>Entregas en el mejor tiempo y de calidad</p>
					</div>
					<div className="options options-2">
						<img src={require('../../assets/rocket.png')} alt="Cohete imagen" />
						<p>Experiencia y calidad para despegar tu proyecto</p>
					</div>
					<div className="options options-3">
						<img src={require('../../assets/money.png')} alt="Dinero imagen" />
						<p>Precios accesibles y personalizados</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutDesktop
