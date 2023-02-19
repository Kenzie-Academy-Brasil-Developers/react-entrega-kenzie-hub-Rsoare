import { forwardRef } from "react"
import {StyledContainer} from "./styled"


export const SelectTechs = forwardRef(({label,id,erro,...rest},ref) => {
   
   return (
      <StyledContainer>
         <label className="label" htmlFor={id}>{label}</label>
         <select id={id} ref={ref} {...rest}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
         </select>
      </StyledContainer>
   )
})
