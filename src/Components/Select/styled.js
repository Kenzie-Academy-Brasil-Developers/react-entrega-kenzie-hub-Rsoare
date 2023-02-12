import styled from "styled-components"

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;

select{
   width: 100%;
   height:2.5rem;
   background-color: var(--grey-200);
   border: none;
   border-radius: 4px;
   font-size: 1rem;
   color: var(--grey-100);
   padding-left: 0.7rem;
}
`