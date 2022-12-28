import './index.css'

const NationalCases = props => {
  const {active, recovered, deceased, confirmed} = props
  console.log()

  return (
    <div className="nc-main-cont">
      <div className="nc-normal-cont cont-co">
        <h1 className="nc-main-hd-confirm">Confirmed</h1>
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672044992/check-mark_1_z1smk0.png"
          alt="recovered"
          className="nc-img"
        />
        <p className="nc-confirm-no">{confirmed}</p>
      </div>
      <div className="nc-normal-cont">
        <h1 className="nc-main-hd-active">Active</h1>
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672044982/protection_1_1_a6xmj7.jpg"
          alt="active"
          className="nc-img"
        />
        <p className="nc-active-no">{active}</p>
      </div>
      <div className="nc-normal-cont">
        <h1 className="nc-main-hd-recover">Recovered</h1>
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672042931/recovered_1_ip7o9y.png"
          alt="recovered"
          className="nc-img"
        />
        <p className="nc-rec-no">{recovered}</p>
      </div>
      <div className="nc-normal-cont">
        <h1 className="nc-main-hd-decease">deceased</h1>
        <img
          src="https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672042947/breathing_1_jbllq9.png"
          alt="deceased"
          className="nc-img"
        />
        <p className="nc-dece-no">{deceased}</p>
      </div>
    </div>
  )
}

export default NationalCases
