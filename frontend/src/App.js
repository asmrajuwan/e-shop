import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import { LoginPage, SignUpPage } from "./Routes.js";

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/sign-up' element={<SignUpPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
