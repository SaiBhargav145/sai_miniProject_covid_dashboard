import {FiGithub, FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'

import './index.css'

const Footer = () => (
  <div className="main-cont">
    <div className="cont">
      <h1 className="hd">
        COVID19<span className="ind">INDIA</span>
      </h1>
      <p className="para">we stand with everyone fighting on the front lines</p>

      <div className="icon-cont">
        <FiGithub className="git" fontSize="48" color="#CBD5E1" />
        <BsInstagram className="insta" />
        <FiTwitter className="twitter" />
      </div>
    </div>
  </div>
)
export default Footer
