import { TechContexts } from "../../context/TechsContext"
import { useContext } from "react"
import {useForm} from "react-hook-form"
import { SelectTechs } from "../SelectTechs"
import { Modal } from "./styled"

export const FormUpdateTechs = ({tech,setModalOpem,modalOpem}) => {
   const {id,title} = tech
   const {updateTechs,deleteTechs} = useContext(TechContexts)

   const {register,
         handleSubmit} = useForm()
   
      const submit = (data) =>{
         updateTechs(data,id)

         setModalOpem(!modalOpem)
      }

      const submitDelete = () =>{
         deleteTechs(id)

         setModalOpem(!modalOpem)
      }
   
   return (
      <Modal role={'dialog'}>

            <div className="modal__title--container">
               <h3 className="Title three"> Tecnologia Detalhes</h3>
               <span onClick={() => setModalOpem(!modalOpem)}>X</span>
            </div>

            <div className="modal__form--container">

               <div>
                  <span className="label">Nome do projeto</span>
                  <p>{title}</p>
               </div>
   
               <form onSubmit={handleSubmit(submit)}>
   
                     <SelectTechs 
                        label="Selecionar status" 
                        id = "status" 
                        {...register("status")}
                     />
   
                  <button type="submit" className="modal__Button--edit">Salvar alterações</button>
   
               </form>

            </div>
            
            <button type="button" className="modal__Button--delete" onClick={submitDelete}>Excluir</button>

      </Modal>
   )
}