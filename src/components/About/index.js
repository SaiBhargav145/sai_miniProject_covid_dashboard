import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Faqs from '../Faqs'
import Facts from '../Facts'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

class About extends Component {
  state = {
    faqData: [],
    factData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTheFaqs()
  }

  getTheFaqs = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const newFactoids = data.factoids.map(eachItem => ({
      banner: eachItem.banner,
      id: eachItem.id,
    }))
    const newFaqs = data.faq.map(eachItem => ({
      answer: eachItem.answer,
      category: eachItem.category,
      general: eachItem.General,
      qno: eachItem.qno,
      question: eachItem.question,
    }))
    console.log(newFactoids)
    console.log(newFaqs)
    this.setState(prevState => ({
      isLoading: !prevState.isLoading,
      faqData: newFaqs,
      factData: newFactoids,
    }))
  }

  renderLoadingView = () => (
    <div className="About-loader">
      <Loader type="Oval" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTheFacts = () => {
    const {factData, faqData} = this.state
    return (
      <>
        <ul>
          {faqData.map(eachItem => (
            <Faqs key={eachItem.qno} details={eachItem} />
          ))}
        </ul>
        <p className="do">DOS & DONTS</p>
        <ul>
          {factData.map(eachItem => (
            <Facts key={eachItem.id} banner={eachItem.banner} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="about-main-cont">
          <div>
            {isLoading ? (
              this.renderLoadingView()
            ) : (
              <div>
                <h1 className="about-main-hd">ABOUT</h1>
                <p className="about-para">Last update on march 28th 2021.</p>
                <h1 className="about-hd">
                  COVID-19 vaccines be ready for distribution
                </h1>
                {this.renderTheFacts()}
                <Footer />
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default About
