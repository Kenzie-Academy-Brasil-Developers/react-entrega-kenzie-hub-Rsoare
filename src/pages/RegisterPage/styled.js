
import styled from "styled-components";

export const MainStyled= styled.main`
background-color: var(--grey-300);
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 2rem;
align-items: center;
width: 18.75rem;
height: fit-content;
margin: 0rem auto;
padding: 2rem 0rem;

@media screen and (min-width:769px) {
   width: 23rem;
}
`