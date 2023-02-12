import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import {NavBarStyled} from "./styled"
export const NavBar= () => {

   const cleanLocalStore = () => {
      window.localStorage.clear()
   }

   return (
      <NavBarStyled>
         <img src={logo} alt="Logo Kenzie Hub" />
         <Link to="/" onClick={cleanLocalStore}>Sair</Link>
      </NavBarStyled>
   )
}
