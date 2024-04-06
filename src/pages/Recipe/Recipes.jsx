import { Container, Row, Col, Button} from 'react-bootstrap';

import { RecipeOfTheDay } from '../../components/Recipes_Page_Components/Today_Recipe';
import { TrendingRecipe } from '../../components/Recipes_Page_Components/Trending_Recipes';
import {useState, useEffect} from 'react'
import React from 'react';
import './Recipes.css';

export function Recipes() {
  
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const dailyRecipeUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=4&tags=meal,healthy';
    
    fetch(dailyRecipeUrl,{
      headers: {
        'X-RapidAPI-Key': '486012e96fmsh58cbc3385b05d74p190492jsn361fa1f77c9f',
        // 'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      } 

    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        console.log(data);
        
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      })
  }, []);

  return (

    <Container className='mt-4'>
      <Row style={{ justifyContent: 'center' }}>
        <h4>Recipe of the day</h4>
        <RecipeOfTheDay />
      </Row>
      <Row>
        <Col>
          <Button className='d-flex align-items-center justify-content-center recipe-button' variant='dark' href="/SearchRecipes">
            Find a Recipe
          </Button>
        </Col>
        <Col>
          <Button className='d-flex align-items-center justify-content-center recipe-button' variant='dark' href="/MealPlan">
            Create a Meal Plan
          </Button>
        </Col>
      </Row>
      <Row>
        <h5>Popular Recipes</h5>
        {recipes["results"]?.map((data, index) => (
            <React.Fragment key={index}>
              <Col>
              <p></p>
              <TrendingRecipe name={data.name} image={data.thumbnail_url} description={data.description}
              positiveRating={data.user_ratings.count_positive} negativeRating={data.user_ratings.count_negative}
              dynamicData={data}/>
              </Col>
              {(index + 1) % 2 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
      </Row>
    </Container>

  )
}
