import { Routes,Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import {RegisterPage} from "../pages/RegisterPage"
import {LoginPage} from "../pages/LoginPage"
import { TechProvider } from "../context/TechsContext"
import { PublicRoutes } from "../pages/PublicRoutes"
import { ProtectedRoutes } from "../pages/ProtectedRoutes"


export const AppRoutes = () => {

   return (
      <Routes>

      <Route path="/" element={<PublicRoutes/>}>
         
         <Route index path="/" element={<LoginPage/>}/>
         <Route path="/Register" element={<RegisterPage/>}/>

      </Route>

      <Route path="/Home" element={<ProtectedRoutes/>}>
         <Route index path="/Home" element={
            <TechProvider>
               <HomePage/>
            </TechProvider>
         }/>

      </Route>



      </Routes>
   )
}