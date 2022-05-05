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
		<div className={`modal-context ${open ? 'open' : 'close'}`}>
      <div className="back-layout modal-open">
        <div className="container-modal">
          <button onClick={handleCloseModal}>CERRAR</button>
          {children}
        </div>
      </div>
		</div>,
		document.body
	)
}

export default ModalLayout
