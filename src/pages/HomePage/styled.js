import styled from "styled-components"


export const TraceStyled = styled.div`
   border-bottom:solid 2px var(--grey-100) ;
   border-top:solid 2px var(--grey-100) ;
`
export const HeaderStyled = styled.header`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
   height: 9rem;
   padding: 0rem 1rem;

   @media screen and (min-width:769px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
   }

`

export const MainStyled = styled.main`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding: 0rem 1rem;
   margin-top: 2rem;

   @media screen and (min-width:769px) {
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      margin-top: 2rem;
   }

`



