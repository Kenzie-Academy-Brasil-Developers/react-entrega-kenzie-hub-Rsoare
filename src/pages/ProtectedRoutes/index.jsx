import { Outlet,Navigate } from "react-router-dom"
import { useContext } from "react"
import { UserContexts } from "../../context/UserContext"

export const ProtectedRoutes = () => {

   const {user} = useContext(UserContexts)

   

   return (
      <>
         { user && !user ? <Navigate to="/" /> : <Outlet/> }
      </>
   )
}
