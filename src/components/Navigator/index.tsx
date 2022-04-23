import { FC } from "react"

const Navigator:FC = () => {
  return (
    <nav className='navigator'>
        <ul>
            <li>
                Conócenos
            </li>
            <li>
                Habilidades
            </li>
            <li>
                Proyectos
            </li>
            <li>
                <button>Contáctanos</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navigator