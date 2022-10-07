import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onchangeCountCalculator = event => {
    const enterString = event.target.value
    const countString = enterString.length

    this.setState({count: countString})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="details-container">
          <h1 className="heading">Calculate The Letters You Enter</h1>
          <label className="para" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter the phrase"
            id="phraseText"
            onChange={this.onchangeCountCalculator}
          />
          <div className="result-container">
            <p className="result">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
