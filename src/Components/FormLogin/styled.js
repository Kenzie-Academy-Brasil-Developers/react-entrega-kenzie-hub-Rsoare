import styled from "styled-components"

export const FormStyled = styled.form`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;
   width: 100%;
   padding-left: 1rem;
   padding-right: 1rem;

   button {
      width: 16rem;
      height: 2.4rem;
      background-color: var(--primary-color);
      color: var(--grey-0);
      border-radius: 4px;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
   }

   button:hover{
      background-color: var(--primary-color-focus);
      transition: 0.3s;
   }
   div{
      position: relative;
      width: 100%;
      img{
         width: 2rem;
         position: absolute;
         right: 1rem;
         top: 2rem;
         cursor: pointer;
      }
   }

   @media screen and (min-width:769px) {

   button{
      width: 20rem;
   }

}
`