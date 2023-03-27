import NavSearch from "../../components/NavSearchBar/NavSearchBar";
import "../Nav/Nav.scss";

const Nav = ({ handleInput }) => {
  return (
    <div className="nav">
      <div className="nav__heading">
        <h3 className="nav__heading--text">Taylor Swift</h3>
      </div>
      <div className="nav__filtering">
        <NavSearch handleInput={handleInput} />
      </div>
    </div>
  );
};

export default Nav;
