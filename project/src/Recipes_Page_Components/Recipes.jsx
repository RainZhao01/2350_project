import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { RecipeOfTheDay } from './Today_Recipe';
import { TrendingRecipe } from './Trending_Recipes';

export function Recipes() {
  return (

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

  )
}
