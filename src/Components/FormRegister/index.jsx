import  {useForm,yupResolver,api,registerSchema ,Select,Input,toast,useNavigate} from "./imports"
import {FormStyled} from "./styled"

export const FormRegister = () => {

      const {register,
            handleSubmit, 
            formState : {errors}} = useForm({resolver:yupResolver(registerSchema)})

      const navigate = useNavigate()

      const registerUser = async (data) =>{
         
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
      
         <FormStyled onSubmit={handleSubmit(registerUser)}>
            <Input 
            label="Nome:" 
            id="name" 
            type="text" 
            placeholder="Digite aqui seu nome"
            {...register("name")}
            erro={errors.name?.message} 
         
            />

            <Input 
            label="Email:" 
            id="email" 
            type="text" 
            placeholder="Digite aqui seu Email"
            erro={errors.email?.message} 
            {...register("email")}
            />

            <Input 
            label="Senha:" 
            id="password" 
            type="text"
            placeholder="Digite aqui sua senha"
            erro={errors.password?.message} 
            {...register("password")}
            />
            
            <Input 
            label="Confirmar Senha :" 
            id="confirmationPassword" 
            type="text" 
            placeholder="Digite novamente sua senha"
            erro={errors.confirmationPassword?.message} 
            {...register("confirmationPassword")}
            />

            <Input 
            label="Bio:" 
            id="bio" 
            type="text" 
            placeholder="Fale sobre você"
            erro={errors.bio?.message} 
            {...register("bio")}
            />
            
            <Input 
            label="Contato:" 
            id="contact" 
            type="text" 
            placeholder="Digite um numero para contato"
            erro={errors.contact?.message} 
            {...register("contact")}
            />

            <Select 
            label="Selecionar módulo" 
            id="course_module" 
            {...register("course_module")}
            />

            <button type="submit">Cadastrar</button>
         </FormStyled>
      
   )
}
