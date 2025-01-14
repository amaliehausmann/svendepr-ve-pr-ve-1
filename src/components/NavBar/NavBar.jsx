import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { IoMdSearch } from "react-icons/io";

export const NavBar = () => {
  return (
    <nav className={style.navStyling}>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? style.activeNavlink : style.navLink
            }
          >
            FORSIDE
          </NavLink>
        </li>
        <li className={style.events}>
          <p>EVENTS</p>
          <ul>
            <li>
              <NavLink 
                to="/lineup" 
                className={({ isActive }) => 
                  isActive ? style.activeNavlink : style.navLink
                }
              >
                LINE-UP
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/program" 
                className={({ isActive }) => 
                  isActive ? style.activeNavlink : style.navLink
                }
              >
                PROGRAM
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink 
            to="/camps" 
            className={({ isActive }) => 
              isActive ? style.activeNavlink : style.navLink
            }
          >
            CAMPS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/tickets" 
            className={({ isActive }) => 
              isActive ? style.activeNavlink : style.navLink
            }
          >
            BILLETTER
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/practicalinfo" 
            className={({ isActive }) => 
              isActive ? style.activeNavlink : style.navLink
            }
          >
            PRAKTISK INFO
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              isActive ? style.activeNavlink : style.navLink
            }
          >
            LOGIN
          </NavLink>
        </li>
        <li>
          <IoMdSearch />
        </li>
      </ul>
    </nav>
  );
};
