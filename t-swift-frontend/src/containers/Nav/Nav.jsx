import { Link } from "react-router-dom";
import NavCheckBox from "../../components/NavCheckBox/NavCheckBox";
import NavSearch from "../../components/NavSearchBar/NavSearchBar";
import "../Nav/Nav.scss";

const Nav = ({ handleInput, handleHighRating, handleMasters }) => {
  return (
    <div className="nav">
      <div className="nav__heading">
        <h3 className="nav__heading--text">Taylor Swift</h3>
      </div>
      <div className="nav__filtering">
        <NavSearch handleInput={handleInput} />
        <NavCheckBox
          handleHighRating={handleHighRating}
          handleMasters={handleMasters}
        />
        <Link to="/album">
          <button className="nav-button-album">All Era Albums</button>
        </Link>
        <Link to="/style">
          <button className="nav-button-styles">All Era Styles</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
