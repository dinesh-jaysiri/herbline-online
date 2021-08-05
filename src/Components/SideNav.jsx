import { NavLink } from "react-router-dom";

const SideNav = ({ showSideNav, hideSideNav }) => {
  return (
    <div className={showSideNav ? "side_nav show" : "side_nav"}>
      <button onClick={hideSideNav} className="close_btn">x</button>
      <ul className="list">
        <li className="list__item">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/product/:skin_care">Skin Care</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/product/:hair_care">Hair care</NavLink>
        </li>
        <li className="list__item">0719138538</li>
      </ul>
    </div>
  );
};

export default SideNav;
