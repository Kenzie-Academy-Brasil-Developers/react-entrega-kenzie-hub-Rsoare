import {Input,useForm,yupResolver,loginSchema,useState, UserContexts,useContext} from "./imports"
import {FormStyled} from "./styled"
import icon from "../../assets/icon.svg"
export const FormLogin = () => {
   const {userLoginContext} = useContext(UserContexts)

   const [inputType,setInputType] = useState("password")

   const toggleInputType = () =>{

      if (inputType == "password" ) {
         setInputType("text")

      } else if(inputType == "text"){
         setInputType("password")
      }

   }

   const {register,
      handleSubmit, 
      formState : {errors}} = useForm({resolver:yupResolver(loginSchema)})


   return (
      <>
         <FormStyled  onSubmit={handleSubmit(userLoginContext)}>

            <Input 
            type="text" 
            label="Email"  
            erro={errors.email?.message} 
            placeholder="Digite aqui seu Email"
            {...register("email")}
            />

            <div>
               <Input 
               type={inputType} 
               label= "Senha"  
               placeholder="Digite aqui a sua senha "
               erro={errors.password?.message} 
               {...register("password")}
               />
               <img src={icon}  onClick={toggleInputType} alt="Icone" aria-label="Botão para visualizar a senha" />
            </div>

            <button type="submin">Entrar</button>

         </FormStyled>
      </>
   )
}
