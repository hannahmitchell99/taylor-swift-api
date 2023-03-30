import "../EraCard/EraCard.scss"


const EraCard = ({name, albumCover, genre, eraIconicQuote, inspiration}) => {

    return (
      <div className="era-card">
      <h2 className="era-card__heading">{name}</h2>
      <div className="era-card-middle">
        <div className="era-card-middle__left">
          <img className="era-card__image" src = {albumCover} alt = {name}/>
        </div>
        <div className="era-card-middle__right">
          <div className="era-card__genre">
            <p>{genre}</p>
          </div>
          <div className="era-card__inspo">
            <p className="inspiration">Inspired by {inspiration.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="era-card__quote">"{eraIconicQuote}"</div>
      <div className="era-card__buttons">
        <button className="era-card__button">quick summary</button>
        <button className="era-card__button">details, please!</button>
      </div>
    </div>
    )
}

export default EraCard;