import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import './index.css'
import Header from '../Header'
import NationalCases from '../NationalCases'

//  import Header from '../Header'
import Footer from '../Footer'

import Search from '../Search'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    searchInput: '',
    filteredList: [],
    allConfirmedCases: 0,
    allActiveCases: 0,
    allDeceasedCases: 0,
    allRecoveredCases: 0,
    stateCovidData: [],
  }

  componentDidMount() {
    this.getTheTotalNoCases()
  }

  getTheTotalNoCases = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      console.log(response)
      const data = await response.json()

      console.log(data)
      // national data
      let allNationConfirmedCases = 0
      let allNationActiveCases = 0
      let allNationDeceasedCases = 0
      let allNationRecoveredCases = 0

      statesList.forEach(element => {
        if (data[element.state_code]) {
          const {total} = data[element.state_code]
          allNationConfirmedCases += total.confirmed ? total.confirmed : 0
          allNationDeceasedCases += total.deceased ? total.deceased : 0
          allNationRecoveredCases += total.recovered ? total.recovered : 0
        }
      })
      allNationActiveCases =
        allNationConfirmedCases -
        (allNationDeceasedCases + allNationRecoveredCases)
      console.log(allNationConfirmedCases)
      console.log(allNationDeceasedCases)
      console.log(allNationRecoveredCases)
      console.log(allNationActiveCases)

      //   state wise data
      /*  Object.keys(data)
          .filter(stateItem => stateItem === eachItem.state_code)
          .map(each => data[each].total.confirmed)  
          https://apis.ccbp.in/covid19-state-wise-data */

      const stateWiseData = statesList.map(eachItem => ({
        stateName: eachItem.state_name,
        statesCode: eachItem.state_code,
        confirmedCases: Object.keys(data)
          .filter(eachState => eachState === eachItem.state_code)
          .map(eachData => data[eachData].total.confirmed),
        recoveredCases: Object.keys(data)
          .filter(eachState => eachState === eachItem.state_code)
          .map(eachData => data[eachData].total.recovered),
        deceasedCases: Object.keys(data)
          .filter(eachState => eachState === eachItem.state_code)
          .map(eachData => data[eachData].total.deceased),
        statePopulation: Object.keys(data)
          .filter(eachState => eachState === eachItem.state_code)
          .map(eachData => data[eachData].meta.population),
        stateActive: Object.keys(data)
          .filter(eachState => eachState === eachItem.state_code)
          .map(
            eachData =>
              data[eachData].total.confirmed -
              (data[eachData].total.deceased + data[eachData].total.recovered),
          ),
      }))
      this.setState({
        allConfirmedCases: allNationConfirmedCases,
        allActiveCases: allNationActiveCases,
        allDeceasedCases: allNationDeceasedCases,
        allRecoveredCases: allNationRecoveredCases,
        stateCovidData: stateWiseData,
      })
    }
  }

  onClickSearch = event => {
    const searchItem = event.target.value
    const filteringResult = statesList.filter(eachItem =>
      eachItem.state_name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    this.setState({
      searchInput: event.target.value,
      filteredList: filteringResult,
    })
  }

  searchListItems = () => {
    const {filteredList} = this.state
    return (
      <ul>
        {filteredList.map(eachItem => (
          <Search
            key={eachItem.state_code}
            stateCode={eachItem.state_code}
            stateName={eachItem.state_name}
            id={eachItem.state_code}
          />
        ))}
      </ul>
    )
  }

  allTheNationalCasesData = () => {
    const {
      allActiveCases,
      allConfirmedCases,
      allDeceasedCases,
      allRecoveredCases,
    } = this.state
    return (
      <NationalCases
        active={allActiveCases}
        confirmed={allConfirmedCases}
        deceased={allDeceasedCases}
        recovered={allRecoveredCases}
      />
    )
  }

  render() {
    const {searchInput, filteredList, stateCovidData} = this.state
    console.log(stateCovidData)

    const showingItem =
      filteredList.length === 0 ? null : this.searchListItems()

    return (
      <>
        <Header />
        <div className="Home-main-cont">
          {/* Search Bar */}
          <div className="search-cont">
            <div className="search-bar">
              <BsSearch className="seach-icon" />
              <input
                type="search"
                onChange={this.onClickSearch}
                value={searchInput}
                placeholder="Enter The State"
                className="search-ip"
              />
            </div>
            {searchInput.length > 0 ? showingItem : ''}
          </div>
          {/* All the states   */}
          {this.allTheNationalCasesData()}
        </div>

        <Footer />
      </>
    )
  }
}

export default Home
