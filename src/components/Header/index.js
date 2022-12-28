import {BiListPlus} from 'react-icons/bi'
import {BsXCircleFill} from 'react-icons/bs'
import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {
    toogle: false,
  }

  onClicklogo = () => {
    this.setState(prevState => ({toogle: !prevState.toogle}))
  }

  menuPop = () => {
    const toogle = this.state

    const popup = toogle ? 'pop-up-on' : 'pop-off'
    return (
      <div className={popup}>
        <div>
          <ul className="hd-list-page list-cont">
            <li className="hd-home">Home</li>
            <li className="hd-vaccine">Vaccination</li>
            <li className="hd-about">About</li>
          </ul>
        </div>
        <div>
          <button type="button" onClick={this.onClicklogo}>
            <BsXCircleFill />
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <div>
          <nav className="hd-nav-bar">
            <div className="hd-main-cont">
              <div>
                <h1 className="hd-logo">
                  COVID19<span className="hd-ind">INDIA</span>
                </h1>
              </div>

              <div className="">
                <ul className="hd-list-page hd-list-cont">
                  <li className="hd-Home">Home</li>
                  <li className="hd-vaccine">Vaccination</li>
                  <li className="hd-about">About</li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <div className="hd-mobile-cont">
              <h1 className="hd-logo">
                COVID19<span className="hd-ind">INDIA</span>
              </h1>
              <button
                onClick={this.onClicklogo}
                type="button"
                className="hd-btn"
              >
                <BiListPlus className="hd-logo-nav" />
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Header
