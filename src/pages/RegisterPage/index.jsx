import { FormRegister } from "../../Components/FormRegister"
import {Header} from "../../Components/Header"
import {MainStyled} from "./styled"
export const RegisterPage = () => {
   return (
      <>
         <Header text="Voltar"/>

         <MainStyled>
            <h2 className="Title one">Crie sua conta</h2>
            <p className="Title colorGrey1">Rapido e grátis, vamos nessa</p>

            <FormRegister/>

         </MainStyled>
      </>
   )
}
