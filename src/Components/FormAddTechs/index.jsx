import { TechContexts } from "../../context/TechsContext"
import { useContext } from "react"
import { techSchema } from "./validation"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import { Input } from "../Inputs"
import { SelectTechs } from "../SelectTechs"
import {Modal} from "./styled"

export const FormAddTechs = ({modalOpem,setModalOpem}) => {
   
   const {addTechs} = useContext(TechContexts)

   const {register,
      handleSubmit, 
      formState : {errors}} = useForm({resolver:yupResolver(techSchema)})
      
      const submit = (data) => {
         
         addTechs(data)
         setModalOpem(!modalOpem)
         
      }
      

   return (

      <Modal role={"dialog"}>

               <div className="modal__title--container">
                  <h3 className="Title three">Cadastrar Tecnologia</h3>
                  <span className='Title one' onClick={() => setModalOpem(!modalOpem)}>X</span>
               </div>
               
               <form onSubmit={handleSubmit(submit)}>
   
                  <Input type="text"
                        label="Nome:" 
                        id="title"
                        erro={errors.title?.message} 
                        placeholder="Digite o nome da Tecnologia"
                        {...register("title")}
                     />
   
                     <SelectTechs 
                        label="Selecionar status" 
                        id = "status" 
                        {...register("status")}
                     />
   
                  <button type="submit">Cadastrar Tecnologia</button>

               </form>

      </Modal>
   )
}
