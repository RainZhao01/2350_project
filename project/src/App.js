import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { NavBar } from './Basic_Layout_Components/NavBar'
import { FooterBar } from './Basic_Layout_Components/FooterBar'
import { Routes, Route } from 'react-router-dom';
import { Recipes } from './Recipes_Page_Components/Recipes' 
import { NotFoundPage } from './pages/NotFoundPage' 
import { Workout } from './Workout_Page_Component/Workout'

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Recipes />}/>
        <Route path="/Workout" element={<Workout />}/>
        <Route path="/NotFound" element={<NotFoundPage />} />
      </Routes>
      <FooterBar/>
    </>

  );
}

export default App;
