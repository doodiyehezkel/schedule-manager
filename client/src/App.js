import { useEffect, useContext } from "react";
import { Routes, Route ,Navigate } from "react-router-dom";

import { UserContext } from "./context/UserContext";

import NavBar from './components/NavBar'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'
import Home from './pages/Home'
import Dashboard from "./pages/Dashboard";

import './App.css';


function App() {

  const { id } = useContext(UserContext)
  const [userId, setUserId] = id
  
  useEffect(() => {
    fetch('/api/token-validation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(result => result.json())
      .then(data => {
        setUserId(data.userId)
      })
      .catch(error => {
        console.log(error);
      })
  }, [setUserId])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={userId ? <Dashboard/> : <Home/>}/>
        <Route path='/signup' element={userId ? <Navigate replace to={'/'}/> : <Signup/>}/>
        <Route path='/login' element={userId ? <Navigate replace to={'/'}/> : <Login/>}/>
      </Routes>
    </>
  );
}

export default App;
