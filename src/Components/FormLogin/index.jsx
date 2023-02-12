import {useNavigate,Input,api,useForm,yupResolver,toast,loginSchema,useState} from "./imports"
import {FormStyled} from "./styled"
import icon from "../../assets/icon.svg"
export const FormLogin = () => {

   const navegate = useNavigate()

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

   const userLogin = async (data) => {

      try {
         const response = await api.post("sessions",data)

         const responseUser = response.data
         
         window.localStorage.clear()

         localStorage.setItem("@kenzieHub:dataLogin",JSON.stringify(responseUser))
         
         navegate("/Home")

         toast.success("Bem vindo(a)!")
         
      } catch(error) {
         console.error(error)
         toast.error("Email ou senha inválidos")
      }

   }

   return (
      <>
         <FormStyled  onSubmit={handleSubmit(userLogin)}>

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
