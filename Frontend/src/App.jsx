import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import './App.css'
import Login from './component/Login'
import Signup from './component/Signup'
import { useAuthContext } from './context/AuthContext';
import Profile from './component/Profile';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 300,
  easing: "ease-in-quad",

});


const App = () => {
  const { authUser } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      <Route path='/profile' element={authUser ? <Profile /> : <Navigate to='/' />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;