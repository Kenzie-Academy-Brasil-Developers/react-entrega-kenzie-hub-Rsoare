import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import {HeaderStyled} from "./styled"
export const Header= ({text}) => {


   return (
      <HeaderStyled>
         <img src={logo} alt="Logo Kenzie Hub" />
         <Link to="/">{text}</Link>
      </HeaderStyled>
   )
}
