import { FC, ReactNode, useContext } from 'react'
import './index.scss'
import { ModalContext } from './Modal'
import { createPortal } from 'react-dom'

interface ModalLayoutProps {
	children: ReactNode
}

const ModalLayout: FC<ModalLayoutProps> = ({ children }) => {
	const { open, setOpen } = useContext(ModalContext)

	const handleCloseModal = () => {
		if (setOpen) setOpen(false)
	}

	return createPortal(
		<div className={`modal-context ${open ? 'open' : 'close'}`} onClick={handleCloseModal}>
			<div className="back-layout modal-open">
				<button className='modal-button' onClick={handleCloseModal}>CERRAR</button>
				<div className="container-modal" onClick={(e)=>e.stopPropagation()}>
					{children}
				</div>
			</div>
		</div>,
		document.body
	)
}

export default ModalLayout
