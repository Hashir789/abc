import Auth from "./pages/Auth/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Bounce } from "react-toastify";

const App = () => {
  return (
    <>
      <Auth/>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default App;