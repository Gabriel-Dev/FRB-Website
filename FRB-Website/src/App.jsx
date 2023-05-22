import { GlobalStyle } from "./styles/global";
import { MainRoutes as Routes } from "./routes";
import { ToastContainer } from 'react-toastify';
import {UserProvider} from "./contexts/userContext/userContext"
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <ToastContainer
        position="bottom-right"
        autoClose={4000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <GlobalStyle/>
    <UserProvider>
    <Routes/>
    </UserProvider>
    </>
  )
}

export default App
