import {BiChevronRightSquare} from 'react-icons/bi'
import './index.css'

const Search = props => {
  const {stateCode, stateName} = props

  return (
    <li className="list-cont">
      <div className="list-cont-el">
        <h1 className="hd">{stateName}</h1>
      </div>
      <div className="btn-cont">
        <button type="button" className="bttn">
          {stateCode}
          <BiChevronRightSquare className="icon" />
        </button>
      </div>
    </li>
  )
}

export default Search
