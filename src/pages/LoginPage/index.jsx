import { FormLogin } from "../../Components/FormLogin"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import {MainContainer} from "./styled"


export const LoginPage = () => {
   return (
         <MainContainer>
            <figure>
               <img src={logo} alt="Logo kenzie hub" />
            </figure>

            <main>
               
               <h1 className="Title one">Login</h1>

               <FormLogin/>

               <p className="Title colorGrey1">Ainda não possui uma conta?</p>
            
               <Link to="/Register">Cadastre-se</Link>

            </main>
         </MainContainer>
   )
}
