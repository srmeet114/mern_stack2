import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Profie from './Pages/Profie'
import Createpost from './Components/Createpost'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/profile" element={<Profie/>} />
        <Route path="/createPost" element={<Createpost/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
