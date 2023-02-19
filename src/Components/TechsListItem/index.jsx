import { FormUpdateTechs } from "../FormUpdateTechs"
import { useState } from "react"
import { StyledLiContainer } from "./styled"


export const TechsListItem= ({tech}) => {

   const {title,status} = tech 

   const [modalOpem,setModalOpem] = useState(false)

   return (
      <>
      <StyledLiContainer>
         <li onClick={() => setModalOpem(!modalOpem)}>
            <p className="Title three">{title}</p>
            <span className="Title colorGrey1" >{status}</span>
         </li>
      </StyledLiContainer>
            
      {modalOpem && <FormUpdateTechs tech={tech} modalOpem={modalOpem} setModalOpem={setModalOpem}/>}
      
      </>
   )
}
