import { Routes,Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import {RegisterPage} from "../pages/RegisterPage"
import {LoginPage} from "../pages/LoginPage"

export const AppRoutes = () => {

   return (
      <Routes>
         <Route path="/" element={<LoginPage/>}/>
         <Route path="/Register" element={<RegisterPage/>}/>
         <Route path="/Home" element={<HomePage/>}/>
      </Routes>
   )
}