import { Button } from "@mui/material"
import { FC } from "react"
import './styles.scss'

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
                <Button variant="contained">Contáctanos</Button>
            </li>
        </ul>
    </nav>
  )
}

export default Navigator