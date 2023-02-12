import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { AppRoutes } from "./Routes"


function App() {

   return (
      <>
         <AppRoutes/>

         <ToastContainer
         position="top-right"
         autoClose={3500}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"   
         />
      </>
   )
}
export default App