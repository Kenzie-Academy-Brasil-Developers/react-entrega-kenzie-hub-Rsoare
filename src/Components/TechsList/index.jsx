import { UserContexts } from "../../context/UserContext"
import { useContext } from "react"
import { TechsListItem } from "../TechsListItem"
import { StyledUl } from "./styled"



export const TechsList = () => {

   const {userTechs} = useContext(UserContexts)

   
   return (
      
      <StyledUl>
         {userTechs.map(tech => <TechsListItem tech={tech} key={tech.id}/>)}
      </StyledUl>
   )
}
