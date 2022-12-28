import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const Search = props => {
  const {stateCode, stateName} = props

  return (
    <li className="sc-list-cont">
      <div className="sc-list-cont-el">
        <h1 className="sc-hd">{stateName}</h1>
      </div>
      <div className="sc-btn-cont">
        <button type="button" className="sc-bttn">
          {stateCode}
          <BiChevronRightSquare className="sc-icon" />
        </button>
      </div>
    </li>
  )
}

export default Search
