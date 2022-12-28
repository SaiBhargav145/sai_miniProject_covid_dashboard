import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="ft-main-cont">
    <div className="ft-sec-cont">
      <h1 className="ft-hd">
        COVID19<span className="ft-sp">INDIA</span>
      </h1>
      <p className="ft-p">we stand with everyone fighting on the front lines</p>
      <div className="ft-icon-cont">
        <VscGithubAlt className="ft-icon" />
        <FiInstagram className="ft-icon" />
        <FaTwitter className="ft-icon" />
      </div>
    </div>
  </div>
)

export default Footer
