import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, status: 'Even'}
  increment = ()=> {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState(prevState => {
      return {
        count: prevState.count + randomNumber,
        status: (prevState.count + randomNumber) % 2 === 0 ? 'Even' : 'Odd',
      }
    })
  }
  render() {
    const {count, status} = this.state
    return (
      <div className="bgContainer">
        <div className="card element">
          <h1 className="countHeading">Count {count}</h1>
          <p className="statusPara">Count is {status}</p>
          <div className="btnContainer">
            <button onClick={this.increment} className="buttonStyle">
              Increment
            </button>
          </div>
          <p className="note">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
