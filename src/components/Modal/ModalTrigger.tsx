import { FC, ReactNode, useContext } from 'react'
import { ModalContext } from './Modal'

interface ModalTriggerProps {
	children: ReactNode
}

const ModalTrigger: FC<ModalTriggerProps> = ({ children }) => {
	const { setOpen } = useContext(ModalContext)

	const handleOpenModal = () => {
		if (setOpen) setOpen(true)
	}

	return (
		<div className="modal-trigger" onClick={handleOpenModal}>
			{children}
		</div>
	)
}

export default ModalTrigger
