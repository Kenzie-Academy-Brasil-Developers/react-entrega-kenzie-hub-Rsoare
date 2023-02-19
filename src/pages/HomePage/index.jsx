import {NavBar} from "../../Components/NavBar"
import {MainStyled,HeaderStyled,TraceStyled,ModalContainer } from "./styled"
import { UserContexts } from "../../context/UserContext"
import { useContext,useState } from "react"
import { TechsList } from "../../Components/techsList"
import { FormAddTechs } from "../../Components/FormAddTechs"

export const HomePage = () => {
   const [modalOpem,setModalOpem] = useState(false)
   const {user} = useContext(UserContexts)
   
   return (

      <>
         <NavBar/>
            <TraceStyled >
               <HeaderStyled>
                  <h1 className="Title one">Olá,{user && user.name} </h1>
                  <p className="Title colorGrey1">{user && user.course_module}</p>
               </HeaderStyled>
            </TraceStyled>

         
            <MainStyled>
               
               <div className="main__title--container ">
                  <h2 className="Title one" >Tecnologias</h2>
                  <button type="button" onClick={() => setModalOpem(!modalOpem)}>+</button>
               </div> 

               <TechsList/>

            </MainStyled>
            
            <ModalContainer> 
               
               {modalOpem && <FormAddTechs setModalOpem = {setModalOpem} modalOpem ={modalOpem} />}

            </ModalContainer>
      </>
   )
}
