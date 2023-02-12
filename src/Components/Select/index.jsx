import { forwardRef } from "react"
import {StyledContainer} from "./styled"
export const Select = forwardRef(({label,id,erro,...rest},ref) => {
   
   return (
      <StyledContainer>
         <label className="label" htmlFor={id}>{label}</label>
         <select id={id} ref={ref} {...rest}>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
         </select>
      </StyledContainer>
   )
})
