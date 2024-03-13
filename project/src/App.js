import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav/NavBar'
import Footer from './components/Footer/FooterBar'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Footer />

    </div>
  );
}

export default App;
