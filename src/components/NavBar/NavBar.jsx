import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { IoMdSearch } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";

export const NavBar = () => {
  const { userData, setUserData } = useContext(UserContext);

  function handleLogOut(){
    setUserData('');
    toast.info('Du er nu logget ud');
  }
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
        {userData ? (
          <li className={style.events}>
            <p>MIN SIDE</p>
            <ul>
              <li>
                <NavLink
                  to="/myprogram"
                  className={({ isActive }) =>
                    isActive ? style.activeNavlink : style.navLink
                  }
                >
                  MIT PROGRAM
                </NavLink>
              </li>
              <li onClick={handleLogOut}>LOG UD</li>
            </ul>
          </li>
        ) : (
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
        )}
        <li>
          <IoMdSearch />
        </li>
      </ul>
    </nav>
  );
};
