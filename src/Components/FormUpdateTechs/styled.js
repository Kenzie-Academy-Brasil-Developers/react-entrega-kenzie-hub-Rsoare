import styled from "styled-components"

export const Modal = styled.div`
   position: absolute;
   width: 18.50rem;
   height: 18rem;
   display: flex;
   flex-direction: column;
   top: 23%;
   align-self: center;
   
   .modal__title--container{
      background-color: var(--grey-200);
      height: 3.12rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      padding: 0rem 1rem;
         
         span{
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            color: var(--grey-0);
         }

      }
      
      .modal__form--container{
         
      background-color: var(--grey-300);
      display: flex;
      flex-direction: column;
      padding: 0rem 1rem;
      height: 100%;
      width: 100%;
      justify-content: center;
      gap: 1rem;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;

      div{
         display: flex;
         flex-direction: column;
         gap: 1rem;
         p{
            display: flex;
            align-items: center;
            border-radius: 4px;
            padding-left: 1rem;
            font-size: 1rem;
            color: var(--grey-100);
            height: 2.5rem;
            width: 100%;
            background-color: var(--grey-200);
         }
      }
      
   }


   .modal__Button--edit{   
      margin-top: 1rem;
      width: 8.75rem;
      height: 3rem;
      border: none;
      border-radius: 4px;
      font-size: 0.95rem;
      color: var(--grey-0);
      background-color: var(--primary-color-negative);
   }

   .modal__Button--delete{
      position: absolute;
      bottom:0.80rem;
      right: 2rem;
      width: 5rem;
      height: 3rem;
      border-radius: 4px;
      border: none;
      font-size: 1rem;
      background-color: var(--grey-100);
      color: var(--grey-0);
   }

   .modal__Button--edit:hover{
      background-color: var(--negative);
   }
   
   .modal__Button--delete:hover{
      background-color: var(--grey-200);
   }

   @media screen and (min-width:769px) {
      width: 24rem;
      height: 22rem;
   
      .modal__title--container{
         height: 4rem;
      }

      .modal__form--container{
         justify-content: center;
         gap: 2rem;
      }

      .modal__Button--delete{
         bottom: 1.90rem;
         width: 6.5rem;
      }
      .modal__Button--edit{
         width: 11.5rem;
      }
   } 

   
`