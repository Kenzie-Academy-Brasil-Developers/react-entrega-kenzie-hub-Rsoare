import { createContext } from "react"
import { api } from "../Services/Api"
import { useContext } from "react"
import { UserContexts } from "./UserContext"
import { toast } from "react-toastify"


export const TechContexts = createContext({})

export const TechProvider = ({children}) => {

   const {userTechs,setUserTechs} = useContext(UserContexts)

   const token = JSON.parse(localStorage.getItem("@kenzieHub:Token"))
      
      const addTechs = async (data) =>{
         
      try {
         const response = await api.post("users/techs",data,{
               headers:{
               Authorization:`Bearer ${token}`,
            }
         })

         toast.success("Tecnologia adicionada com sucesso ")

         setUserTechs([...userTechs, response.data])

      } 
      catch(error) {
         console.error(error)
         toast.error("não foi possivel adicionar a Tecnologia")
      } 
   }


   const updateTechs = async (data,id) =>{

      try {
         const response = await api.put(`users/techs/${id}`,data,{
               headers:{
               Authorization:`Bearer ${token}`,
            }
         })

         toast.success("Tecnologia editada com sucesso ")

         const newTechsList = userTechs.map(techs => {

            if(id == techs.id){
               return {...techs, ...data}
            } else {
               return techs
            }
         })

         setUserTechs(newTechsList)
      } 

      catch(error) {
         console.error(error)
         toast.error("não foi possivel editar a Tecnologia")
      } 
   }

   
   const deleteTechs = async (id) =>{

      try {
         const response = await api.delete(`users/techs/${id}`,{
               headers:{
               Authorization:`Bearer ${token}`,
            }
         })
         
         toast.success("Tecnologia removida com sucesso ")

         const newTechsList = userTechs.filter(techs => techs.id !== id)

         setUserTechs(newTechsList)
      } 
      catch(error) {

         console.error(error)

         toast.error("não foi possivel remover a Tecnologia")

      } 
   }
   

   return (

      <TechContexts.Provider value={{addTechs,updateTechs,deleteTechs }}>{children} </TechContexts.Provider>
   
   )

}  