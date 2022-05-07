import { createContext, FC, ReactNode, useEffect, useState } from 'react'

interface ModalContextInterface {
	open?: boolean
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

interface ModalProps {
	children: ReactNode
}

export const ModalContext = createContext<ModalContextInterface>({})

const Modal: FC<ModalProps> = ({ children }) => {
	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden'
		}
		if (open === false) {
			document.body.style.overflow = 'visible'
		}
	}, [open])

	return (
		<ModalContext.Provider value={{ open, setOpen }}>
			{children}
		</ModalContext.Provider>
	)
}

export default Modal
