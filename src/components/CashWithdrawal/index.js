// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  getFirstCharOfName = name => name.slice(0, 1)

  updateBalance = value => {
    const {balance} = this.state
    if (balance - value >= 0) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Srinivas'
    const initial = this.getFirstCharOfName(name)

    return (
      <div className="bg-container">
        <div className="container">
          <div className="card4">
            <div className="card">
              <p className="paragraph">{initial}</p>
            </div>
            <h1 className="heading1">Srinivas Polaveni</h1>
          </div>
          <div className="card2">
            <p className="paragraph2">Your Balance</p>
            <div className="card3">
              <p className="heading">{balance}</p>
              <p className="paragraph1">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="paragraph1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
