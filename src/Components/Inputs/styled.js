import styled from "styled-components"

export const InputStyled = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.60rem;

label{
   align-self: flex-start;
}
input{
   width: 97%;
   height:2.5rem;
   background-color: var(--grey-200);
   border: none;
   border-radius: 4px;
   font-size: 1rem;
   color: var(--grey-0);
}
p{
   align-self: flex-start;
   color: var(--negative);
   font-size: 0.80rem;
}
input::placeholder{
   padding-left: 0.8rem;
   color: var(--grey-100);
}

`