import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PrivateRoute from "./components/PrivateRoute"; 
import Students from "./pages/Students"
import ForgotPassword from "./pages/ForgotPassword"
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateInfo from "./pages/CreateInfo";
import CreateCounsel from "./pages/CreateCounsel";
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path ="/" element={<Home/>} /> 
        <Route path="/profile" element={<PrivateRoute/>}>
          <Route path ="/profile" element={<Profile/>} />
        </Route>
        <Route path ="/sign-in" element={<SignIn/>} /> 
        <Route path ="/sign-up" element={<SignUp/>} /> 
        <Route path ="/students" element={<Students/>} /> 
        <Route path ="/create-info" element={<CreateInfo/>} /> 
        <Route path ="/create-counsel" element={<CreateCounsel/>} /> 
        <Route path ="/forgot-password" element={<ForgotPassword/>} /> 
      </Routes>

    </Router>
    <ToastContainer
position="bottom-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover
theme="colored"
/>
    
    </>
  );
}

export default App;
