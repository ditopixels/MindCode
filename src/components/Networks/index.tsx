import { FC } from "react"
import {ReactComponent as WhatsappIcon} from '../../assets/whatsapp.svg'
import {ReactComponent as FacebookIcon} from '../../assets/facebook.svg'
import {ReactComponent as GmailIcon} from '../../assets/gmail.svg'
import {ReactComponent as FiverrIcon} from '../../assets/fiverr.svg'
import './style.scss'

const Networks:FC = () => {
  return (
    <div className='networks'>
        <div className='networks-container'>
            <a href="/" rel="noopener" target='_blank'>
                <WhatsappIcon/>
            </a>
            <a href="/" rel="noopener" target='_blank'>
                <FacebookIcon/>
            </a>
            <a href="mailto:mindcode.me@gmail.com" rel="noopener">
                <GmailIcon/>
            </a>
            <a href="/" rel="noopener" target='_blank'>
                <FiverrIcon/>
            </a>
        </div>
    </div>
  )
}

export default Networks