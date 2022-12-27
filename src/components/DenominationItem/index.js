// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails
  const onChange = () => {
    updateBalance(value)
  }

  return (
    <li className="item">
      <button type="button" className="button1" onClick={onChange}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
