import { Link } from "react-router-dom";
import NavCheckBox from "../../components/NavCheckBox/NavCheckBox";
import NavSearch from "../../components/NavSearchBar/NavSearchBar";
import "../Nav/Nav.scss";

const Nav = ({ handleInput, handleHighRating, handleMasters }) => {
  return (
    <div className="nav">
      <div className="nav__heading">
        <Link to="/album" style={{ textDecoration: "none" }}>
          <button className="nav-button-album">All Era Albums</button>
        </Link>
        <h3 className="nav__heading--text">Taylor Swift</h3>
        <Link to="/style" style={{ textDecoration: "none" }}>
          <button className="nav-button-styles">All Era Styles</button>
        </Link>
      </div>
      <div className="nav__filtering">
        <NavSearch handleInput={handleInput} />
        <NavCheckBox
          handleHighRating={handleHighRating}
          handleMasters={handleMasters}
        />
      </div>
    </div>
  );
};

export default Nav;
