import React from "react"
import ReactDOM from "react-dom/client"
import  App  from "./App"
import {GlobalStyle} from "./Components/GlobalStyle/"
import { BrowserRouter } from "react-router-dom"


ReactDOM.createRoot(document.getElementById("root")).render(

   <React.StrictMode>
      <BrowserRouter>
         <GlobalStyle/>
         <App />
      </BrowserRouter>
   </React.StrictMode>

)
