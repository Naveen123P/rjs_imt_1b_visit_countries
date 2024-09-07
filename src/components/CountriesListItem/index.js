import {Button, Para} from './styledComponent'
import './index.css'

const CountriesListItem = props => {
  const {details, onChangeVisitStatus} = props
  const {id, name, isVisited} = details
  const visitButtonText = isVisited ? 'Visited' : 'Visit'
  const onClickVisit = () => {
    onChangeVisitStatus(id)
  }
  return (
    <li className="list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <Para className="visited">{visitButtonText}</Para>
      ) : (
        <Button type="button" isVisited={isVisited} onClick={onClickVisit}>
          {visitButtonText}
        </Button>
      )}
    </li>
  )
}

export default CountriesListItem
