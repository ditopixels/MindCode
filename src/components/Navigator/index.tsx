import { Button } from '@mui/material'
import { FC, useContext } from 'react'
import Modal from '../Modal/Modal'
import ModalLayout from '../Modal/ModalLayout'
import ModalTrigger from '../Modal/ModalTrigger'
import './styles.scss'

const Contactanos: FC = () => {
	return (
		<>
			<Modal>
				<ModalTrigger>
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
				</ModalTrigger>
				<ModalLayout>
					<section>Contenido de ejemplo</section>
				</ModalLayout>
			</Modal>
		</>
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
