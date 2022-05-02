import { Button } from '@mui/material'
import { FC } from 'react'
import './styles.scss'

const Contactanos: FC = () => {
	return (
		<Button
			variant="contained"
			style={{
				color: '#fff',
				fontWeight: '700',
				fontSize: '15px',
				textTransform: 'capitalize',
			}}
		>
			Contáctanos
		</Button>
	)
}

const Navigator: FC = () => {
	return (
		<nav className="navigator">
			<ul>
				<li>Conócenos</li>
				<li>Habilidades</li>
				<li>Proyectos</li>
				<li>
					<Contactanos />
				</li>
			</ul>
		</nav>
	)
}

export default Navigator
export { Contactanos }
