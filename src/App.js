import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: intialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filteredUserData})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchResults = userDetailsList.filter(userInfo =>
      userInfo.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onChangeSearchInput} />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              onSeleteUser={this.onSeleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App