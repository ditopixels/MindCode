import React, { FC } from 'react'
import { Contactanos } from '../Navigator/index'
import './style.scss'

const Newsletter: FC = () => {
	return (
		<div className='newsletter'>
			<div className='start-proyect'>
				<p className='start-proyect-paragraph'>Iniciar proyecto</p>
			</div>

			<div className='coffe'>
				<p>¿Interesado en trabajar con nosotros?</p>
				<p>Deberiamos charlar. Yo pago el café.</p>
			</div>

			<div className='contact-footer'>
				<Contactanos />
			</div>
		</div>
	)
}

export default Newsletter
