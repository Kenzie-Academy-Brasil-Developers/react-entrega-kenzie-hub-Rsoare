import { forwardRef } from "react"
import { InputStyled } from "./styled"
export const Input = forwardRef(({label,id,erro,type,...rest},ref) => {
      
      return (
         <InputStyled>
            <label htmlFor={id} className="label">{label}</label>
            <input type={type} id={id} ref={ref} {...rest}/>
            {erro ? <p>{erro}</p> : null}
         </InputStyled>
      )
   }
)
