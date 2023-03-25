import "../EraCard/EraCard.scss"

const EraCard = ({name, description, eraIconicQuote}) => {

    return (
        <div className="era-card">
        <div className="era-card__info">
          <h2 className="era-card__info--heading">{name}</h2>
          <div className="era-card__info--description">
          {description} {eraIconicQuote}
          </div>
        </div>
      </div>

    )
}

export default EraCard;