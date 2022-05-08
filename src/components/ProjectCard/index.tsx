import { FC } from 'react'
import Carousel from '../Carousel'
import Modal from '../Modal/Modal'
import ModalLayout from '../Modal/ModalLayout'
import ModalTrigger from '../Modal/ModalTrigger'
import './styles.scss'

interface ProjectCardProps {
    id: number,
    name: string,
    description: string,
    images: string[]
}

const ProjectCard:FC<ProjectCardProps> = ({description, images, name}) => {
  return (
    <div>
        <Modal>
            <ModalTrigger>
                <img src={images[0]} alt={name}/>
            </ModalTrigger>
            <ModalLayout>
                <div className='projectcard'>
                    <div className='projectcard-container'>
                        <div className='projectcard-slider'>
                            <Carousel>
                                {images.map((image, index)=>(
                                    <img key={index} src={image} alt={`${name} ${index}`} width="1920px" className='projectcard-slider__image'/>
                                ))}
                            </Carousel>
                        </div>
                        <div className='projectcard-description'>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </ModalLayout>
        </Modal>
    </div>
  )
}

export default ProjectCard