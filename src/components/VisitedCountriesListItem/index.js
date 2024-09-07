import './index.css'

const VisitedCountriesListItem = props => {
  const {details, removeCountry} = props
  const {id, name, imageUrl} = details

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <li className="visited-country-list">
      <img src={imageUrl} alt="thumbnail" className="thumbnail-img" />
      <div className="name-button-div">
        <p className="country-name">{name}</p>
        <button type="button" className="remove-button" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesListItem
