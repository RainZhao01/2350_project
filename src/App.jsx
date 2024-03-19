import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/Basic_Layout_Components/NavBar.jsx'
import { FooterBar } from './components/Basic_Layout_Components/FooterBar.jsx'
import { Routes, Route } from 'react-router-dom';
import { Recipes } from './pages/Recipe/Recipes.jsx' 

//add recipe template page


import { NotFoundPage } from './pages/NotFoundPage.jsx' 
import { Workout } from './pages/Workout/Workout.jsx'
import { WAPI } from './pages/Workout/Workout_API.jsx'


export function App() { 
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Recipes />}/>
        <Route path="/Workout" element={<Workout />}/>
        <Route path="/Workout_API" element={  <WAPI await/>}></Route>
        <Route path="/NotFound" element={<NotFoundPage />} />
      </Routes>
      <FooterBar/>
    </>

  );
} 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

