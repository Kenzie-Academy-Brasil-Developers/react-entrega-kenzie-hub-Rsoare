import "react-toastify/dist/ReactToastify.css"
import React from "react"
import ReactDOM from "react-dom/client"
import  App  from "./App"
import {GlobalStyle} from "./Components/GlobalStyle/"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./context/UserContext"
import { ToastContainer } from "react-toastify"



ReactDOM.createRoot(document.getElementById("root")).render(

   <React.StrictMode>
      
      <BrowserRouter>

         <UserProvider>
            <App />
         </UserProvider>
         
         <GlobalStyle/>

      </BrowserRouter>

      <ToastContainer
         position="top-center"
         autoClose={3500}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         draggable
         theme="dark"   
         />
   </React.StrictMode>

)
