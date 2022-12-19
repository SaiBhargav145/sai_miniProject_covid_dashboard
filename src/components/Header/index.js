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
          <ul className="list-page list-cont">
            <li className="home">Home</li>
            <li className="vaccine">Vaccination</li>
            <li className="about">About</li>
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
          <nav className="nav-bar">
            <div className="main-cont">
              <div>
                <h1 className="logo">
                  COVID19<span className="ind">INDIA</span>
                </h1>
              </div>

              <div className="">
                <ul className="list-page list-cont">
                  <li className="Home">Home</li>
                  <li className="vaccine">Vaccination</li>
                  <li className="about">About</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mobile-cont">
                <h1 className="logo">
                  COVID19<span className="ind">INDIA</span>
                </h1>
                <button
                  onClick={this.onClicklogo}
                  type="button"
                  className="btn"
                >
                  <BiListPlus className="logo-nav" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
export default Header
