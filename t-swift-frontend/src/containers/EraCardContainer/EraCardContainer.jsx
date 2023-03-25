import "../EraCardContainer/EraCardContainer.scss"
import EraCard from "../../components/EraCard/EraCard"

const EraCardContainer = ({eras}) => {

    const erasJSX = eras.map((era) => {
        return <EraCard description = {era.eraDescription} name = {era.albumOfEra.name}  eraIconicQuote = {era.eraIconicQuote} albumCover = {era.albumOfEra.cover}key = {era.eraId}/>
    })

  return (
    <div className='era-card-container'>
    <div className="era-card-container__display">{erasJSX}</div>
    </div>

  )
  
}

export default EraCardContainer