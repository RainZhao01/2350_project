import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from './Basic_Layout_Components/NavBar'
import { RecipeOfTheDay } from './Recipes_Page_Components/Today_Recipe';
import { TrendingRecipe } from './Recipes_Page_Components/Trending_Recipes';

import NavBar from './components/Nav/NavBar'
import Footer from './components/Footer/FooterBar'

//Idk how to do link pages so everything is here so I can see the page
function App() {
  return (
    <>
      <NavBar/>
      <Container className='mt-4'>
        <Row style={{ justifyContent: 'center' }}>
          <h4>Recipe of the day</h4>
          <RecipeOfTheDay />
        </Row>
        <Row>
          <h5>Trending_Recipes</h5>   
          <Col><TrendingRecipe /></Col>
          <Col><TrendingRecipe /></Col>
          <div className="w-100"></div>
          <Col><TrendingRecipe /></Col>
          <Col><TrendingRecipe /></Col>
        </Row>
      </Container>
    </>
      <Footer/>
  );
}

export default App;
