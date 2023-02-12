import styled from "styled-components"

export const MainContainer= styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;
   height: 100vh;

   img{
      width: 9.75rem;
   }
   main{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      background-color: var(--grey-300);
      height: 25.5rem;
      width: 18.75rem;
      border-radius: 4px;
      padding-bottom: 1rem;
      box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
   }

   h1{
      margin-top: 1rem;
   }

   a{
      width: 16.18rem;
      height: 2.4rem;
      background-color: var(--grey-100);
      color: var(--grey-0);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   a:hover{
      background-color: var(--grey-200);
      transition: 0.3s;
   }

   @media screen and (min-width:769px) {
      main{
         height: 25.5rem;
         width: 23rem;
      }

      a{
         width: 20rem;
      }
   }
`