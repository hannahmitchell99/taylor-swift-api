import "../EraCard/EraCard.scss"

const EraCard = ({name, albumCover, genre, eraIconicQuote, inspiration}) => {

    return (
        <div className="era-card">
        <div className="era-card__info">
          <h2 className="era-card__info--heading">{name}</h2>
          <div className="era-card__info--image">
          <img className="era-image" src={albumCover} alt={name} />
          </div>
          <div className="era-card__info--genre">
            <p>{genre}</p>
          </div>
          <div className="era-card__info--inspo">
            <p className="inspiration">Inspired by {inspiration.join(", ")}</p>
          </div>
          <div className="era-card__info--quote">"{eraIconicQuote}"</div>
          <div className="era-card__info--buttons">
            <button className="era-card__button">quick summary</button>
            <button className="era-card__button">details, please!</button>
          </div>
          </div>
        </div>

    )
}

export default EraCard;