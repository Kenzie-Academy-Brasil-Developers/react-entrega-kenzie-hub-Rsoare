import { createGlobalStyle } from "styled-components"

export const GlobalTypography = createGlobalStyle`

.Title.one{
   font-size: 1.3rem;
   font-weight: 600;
   letter-spacing: 0.10rem;
   color: var(--grey-0);
}

.Title.colorGrey1{
   font-size: 0.90rem;
   font-weight: 600;
   color: var(--grey-100);
}

.Title.two{
   font-size: 1rem;
   font-weight: 400;
   color: var(--grey-0);
}

.Title.three{
   font-size: 1rem;
   font-weight: 700;
   color: var(--grey-0);
}

.Title.colorPrimary{
   font-size: 1rem;
   font-weight: 700;
   color: var(--primary-color);
}

.Headline{
   font-size: 0.75rem;
   font-weight: 400;
   color: var(--grey-400);
}
.label{
   font-size: 0.90rem;
   font-weight: 400;
   color: var(--grey-0);
}


.Headline.Bold{
   font-size: 1rem;
   font-weight: 700;
   color: var(--grey-0);
}

.Headline.Italic{
   font-size: 1rem;
   font-weight: 600;
   color: var(--grey-0);
   font-style: italic;
}

`