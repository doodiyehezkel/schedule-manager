import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'
import Home from './pages/Home'
import './App.css';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false)
 
  useEffect(()=>{
    fetch('/api/token-validation',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(result => result.json())
    .then(data => {
      setIsLogedIn(data.isAuth)
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLogedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/signup" element={isLogedIn ? <Navigate to="/" /> : <Signup setIsLogedIn={setIsLogedIn} />} />
          <Route path="/login" element={isLogedIn ? <Navigate to="/" /> : <Login setIsLogedIn={setIsLogedIn} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
