import NavSearch from "../../components/NavSearchBar/NavSearchBar"
import "../Nav/Nav.scss"

const Nav = ({handleInput}) => {

    return (
      <div className = "nav">
        <NavSearch handleInput={handleInput}/>
        </div>
    )
  }
  
  export default Nav