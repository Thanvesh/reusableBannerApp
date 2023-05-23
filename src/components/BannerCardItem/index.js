import './index.css'

const SeasonCard = props => {
  const {cardItem} = props
  const {headerText, description, className} = cardItem

  return (
    <li className={className}>
      <div>
        <h1 className="card-heading"> {headerText} </h1>
        <p className="card-description"> {description} </p>
        <button type="button" className="card-btn">
          Show More
        </button>
      </div>
    </li>
  )
}
export default SeasonCard
