import { createContext,useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../Services/Api"
import { toast } from "react-toastify"

export const UserContexts = createContext({})

export const UserProvider = ({children}) =>{  
   
   const [user,setUser] = useState(null)
   const [userTechs,setUserTechs] = useState([])

   const navigate = useNavigate()


   useEffect(() => {

      const token = JSON.parse(localStorage.getItem("@kenzieHub:Token"))

      if (token) {
         
         const userAutoLogin = async () =>{

            try {
               const response = await api.get("profile",{
                  headers:{
                     Authorization:`Bearer ${token}`,
                  }
               })

               setUser(response.data)

               setUserTechs(response.data.techs)

               navigate("/Home")
   
            } 
            catch(error) {
               console.error(error)
            } 
         }
         userAutoLogin()
      }
   },[])


   const userLoginContext = async (data) => {

      try {
         const response = await api.post("sessions",data)


         const responseToken = response.data.token

         localStorage.setItem("@kenzieHub:Token",JSON.stringify(responseToken))
         
         navigate("/Home")

         setUser(response.data.user)

         
         setUserTechs(response.data.user.techs)
         
         toast.success("Bem vindo(a)!")
         
      } catch(error) {
         console.error(error)
         toast.error("Email ou senha inválidos")
      }

   }

   const registerUserContext = async (data) =>{
         
      try{

         const response = await api.post("users",data)
         toast.success("Usuario criado com sucesso")

         navigate("/")

      } catch (error){
         
         console.error(error)
         error.response.status == 401 ? (toast.error("Email ja cadastrado!"))
         :(toast.error("Erro inesperado ao realizar o cadastro"))
      }

   }

   return (

      <UserContexts.Provider value={{userLoginContext,registerUserContext,user,userTechs,setUserTechs}}>{children} </UserContexts.Provider>
   
   )
}

