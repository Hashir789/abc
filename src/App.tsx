import './App.css';
import Auth from "./pages/Auth/Auth";
import Journal from './pages/Journal/Journal';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar/Navbar';
import Settings from './pages/Settings/Settings';
import Scorecard from './pages/Scorecard/Scorecard';
import Dashboard from './pages/Dashboard/Dashboard';
import { ToastContainer, Bounce } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {

  const location = useLocation();

  return (
    <>
      { location.pathname !== "/" &&
        <div className="layout-container">
          <Navbar />
          <div className="layout-main">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scorecard" element={<Scorecard />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      }
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
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
  );
};

export default App;