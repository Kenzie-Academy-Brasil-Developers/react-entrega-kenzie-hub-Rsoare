import styled from "styled-components"

export const NavBarStyled = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
height: 2.5rem;
margin: 2rem 0.5rem;
padding: 0rem 1rem;

img{
   width: 7rem;
   height: 2rem;
}

a{
   background-color: var(--grey-200);
   color: var(--grey-0);
   height: 2.5rem;
   width: 4rem;
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: center;
}
a:hover{
   background-color: var(--grey-300);
   transition: 0.3s;
}

@media screen and (min-width:769px) {

      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      height: 7rem;
      
      img{
         width: 9rem;
      }
      
   }
`