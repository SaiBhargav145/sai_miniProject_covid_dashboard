import './index.css'

const Facts = props => {
  const {banner} = props
  return (
    <li className="li-facts">
      <p className="li-facts-para"> {banner}</p>
    </li>
  )
}

export default Facts
