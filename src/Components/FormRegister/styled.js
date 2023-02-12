import styled from "styled-components"

export const FormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;

button{
   width: 16.18rem;
   height: 2.4rem;
   background-color: var(--primary-color-negative);
   color: var(--grey-0);
   border-radius: 4px;
   font-size: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
}

button:hover{
   background-color: var(--primary-color-focus);
   transition: 0.3s;
}
@media screen and (min-width:769px) {
   width: 90%;

   button{
      align-self: center;
      width: 100%;
   }
}
`
