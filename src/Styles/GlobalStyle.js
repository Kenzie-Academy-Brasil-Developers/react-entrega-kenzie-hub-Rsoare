import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
   --primary-color: #FF577F;
   --primary-color-focus: #FF427F;

   --primary-color-negative:#59323F;

   --negative:#E83F5B;
   
   --grey-0: #F8F9FA;
   --grey-100: #868E96;
   --grey-200: #343B41;
   --grey-300: #212529;
   --grey-400: #121214;

   --primary-font: 'Inter', sans-serif;
}

body{
   font-family:var(--primary-font);
   background-color: var(--grey-400);
}

button {
   cursor: pointer;
   font-family: var(--primary-font);
}

input{
   font-family: var(--primary-font);
}

a{
   font-family: var(--primary-font);
   cursor: pointer;
}
`