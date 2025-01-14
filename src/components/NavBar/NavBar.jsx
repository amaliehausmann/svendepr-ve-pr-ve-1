import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { IoMdSearch } from "react-icons/io";
export const NavBar = () => {
  return (
    <nav className={style.navStyling}>
      <ul>
        <li>
          <NavLink to="/">FORSIDE</NavLink>
        </li>
        <li>
          <p>EVENTS</p>
          <ul>
            <li>
              <NavLink to="/lineup">LINE-UP</NavLink>
            </li>
            <li>
              <NavLink to="/program">PROGRAM</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/camps">CAMPS</NavLink>
        </li>
        <li>
          <NavLink to="/tickets">BILLETTER</NavLink>
        </li>
        <li>
          <NavLink to="/practicalinfo">PRAKTISK INFO</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
        <li>
          <IoMdSearch />
        </li>
      </ul>
    </nav>
  );
};
