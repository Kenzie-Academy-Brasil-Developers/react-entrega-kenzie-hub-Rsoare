import {NavBar} from "../../Components/NavBar"
import {MainStyled,HeaderStyled,TraceStyled } from "./styled"
export const HomePage = () => {

   const dataUser = JSON.parse(localStorage.getItem("@kenzieHub:dataLogin")) || {}
   const {name,course_module} = dataUser.user 
   
   return (
      <>
      <NavBar/>

            <TraceStyled >
               <HeaderStyled>
                  <h1 className="Title one">Olá, {name} </h1>
                  <p className="Title colorGrey1">{course_module}</p>
               </HeaderStyled>
            </TraceStyled>

      
         <MainStyled>
            <h2 className="Title one" >Que pena! Estamos em desenvolvimento :(</h2>
            <p className="Title two">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
         </MainStyled>
   </>
   )
}
