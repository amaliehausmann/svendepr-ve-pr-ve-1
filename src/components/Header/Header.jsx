import { useState, useEffect } from "react";
import { NavBar } from "../NavBar/NavBar";
import style from "./Header.module.scss";
import { IoMenuSharp } from "react-icons/io5";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  // //Funktion som tjekker om skærmstørrelsen er mobilstørrelse
  const isMobile = () => window.innerWidth <= 750;

  function toggleNav() {
    if (isMobile()) {
      setShowNav((prev) => !prev);
    } else {
      setShowNav(true);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile()) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={style.headerStyling}>
      <div onClick={toggleNav}>
        <IoMenuSharp />
      </div>
      <img src="../src/assets/images/Logo.png" alt="Logo" />
      <h2>4 - 7. juli 2022</h2>
      {showNav && <NavBar />}
    </header>
  );
};
