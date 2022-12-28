import './index.css'

const Faqs = props => {
  const {details} = props
  const {answer, question} = details
  return (
    <li className="faq-li">
      <p className="faq-qus">{question}</p>
      <p className="faq-ans">{answer}</p>
    </li>
  )
}

export default Faqs
