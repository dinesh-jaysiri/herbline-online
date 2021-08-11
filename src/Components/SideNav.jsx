import { NavLink } from "react-router-dom";

const SideNav = ({ showSideNav, hideSideNav }) => {
  return (
    <div
      onOutsideClick={hideSideNav}
      className={showSideNav ? "side_nav show" : "side_nav"}
    >
      <button onClick={hideSideNav} className="close_btn">
        x
      </button>
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
        <li className="list__item">
          <a href="tel:0719138538">0719138538</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
