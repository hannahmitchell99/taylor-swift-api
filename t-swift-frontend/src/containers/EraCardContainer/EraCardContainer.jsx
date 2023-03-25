import "../EraCardContainer/EraCardContainer.scss"

const EraCardContainer = ({eras}) => {

    const erasJSX = eras.map((era) => {
        return <EraCard description = {era.eraDescription} name = {era.albumOfEra.name}  eraIconicQuote = {era.eraIconicQuote}key = {era.eraId}/>
    })

  return (
    <div className='era-card-container'>
    <div className="era-card-container__display">{erasJSX}</div>
    </div>

  )
  
}

export default EraCardContainer