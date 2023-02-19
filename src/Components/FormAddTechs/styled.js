import styled from "styled-components"

export const Modal = styled.div`
   position: absolute;
   width: 19.50rem;
   height: 17.12rem;
   display: flex;
   flex-direction: column;
   top: 23%;
   align-self: center;

   .modal__title--container{
      background-color: var(--grey-200);
      height: 3.12rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      padding: 0rem 1rem;

      span{
         font-size: 1rem;
         cursor: pointer;
      }
   }

   form{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: var(--grey-300);
      height: 100%;
      justify-content: center;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 0rem 0.80rem;
   }

   button{
      height: 2.3rem;
      background-color: var(--primary-color);
      color: var(--grey-0);
      border: none;
      border-radius: 4px;
   }

   button:hover{
      background-color: var(--primary-color-focus);
   }

   @media screen and (min-width:769px) {
      width: 24rem;
      height: 22rem;

   .modal__title--container{
      height: 4rem;
   }

   form{
      justify-content: center;
      gap: 1.5rem;
   }

   button{
      font-size: 1rem;
      height: 3rem;
   }

   }

   
`