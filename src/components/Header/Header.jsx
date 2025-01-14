import { NavBar } from "../NavBar/NavBar"
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.headerStyling}>
        <img src="../src/assets/images/Logo.png" alt="" />
        <h2>4 - 7. juli 2022</h2>
        <NavBar/>
    </header>
  )
}