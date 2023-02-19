import styled from "styled-components"

export const StyledLiContainer = styled.div`
   height: 3rem;
   width: 100%;

   li{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background-color: var(--grey-400);
      height: 100%;
      width: 100%;
      border-radius: 8px;
      padding: 0rem 1rem;
      cursor: pointer;
   }

   li:hover{
      background-color: var(--grey-200);
   }
`

