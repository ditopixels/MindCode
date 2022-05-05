import { FC, ReactNode, useContext } from 'react'
import { ModalContext } from './Modal'

interface ModalTriggerProps {
  children: ReactNode
}

const ModalTrigger:FC<ModalTriggerProps> = ({children}) => {

  const { setOpen } = useContext(ModalContext)

  const handleOpenModal = () => {
		if (setOpen) setOpen(true)
	}

  return (
    <button className='modal-trigger' onClick={handleOpenModal}>
      {children}
    </button>
  )
}

export default ModalTrigger
