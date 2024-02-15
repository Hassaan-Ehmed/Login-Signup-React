import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/MUI/Signup';
import LogIn from './components/MUI/Login';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

function App() {
  return (
  <>
  
  <Router>


<Routes>

<Route path='/signup' element={<SignUp/>} /> 

<Route path='/login' element={<LogIn/>} />
<Route path='/' element={<SignUp/>} />

</Routes>
  
  </Router>
  </>
  );
}

export default App;
