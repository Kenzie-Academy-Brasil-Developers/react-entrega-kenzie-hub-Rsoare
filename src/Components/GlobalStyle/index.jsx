import React from "react"
import { GlobalReset } from "../../Styles/Reset"
import { GlobalStyles } from "../../Styles/GlobalStyle"
import { GlobalTypography } from "../../Styles/Typography"

export const GlobalStyle = () => {
   return (
      <>
      <GlobalReset/>
      <GlobalStyles/> 
      <GlobalTypography/>
      </>
   )
}
