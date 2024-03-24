
import { Container, Row, Col } from 'react-bootstrap';
import { RecipeOfTheDay } from '../../components/Recipes_Page_Components/Today_Recipe';
import { TrendingRecipe } from '../../components/Recipes_Page_Components/Trending_Recipes';
import {useState, useEffect} from 'react'
import React from 'react';

export function Recipes() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const dailyRecipeUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=1&size=4&tags=meal,healthy';
    
    fetch(dailyRecipeUrl,{
      headers: {
        // 'X-RapidAPI-Key': '486012e96fmsh58cbc3385b05d74p190492jsn361fa1f77c9f',
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
        <h5>Popular Recipes</h5>
        {recipes["results"]?.map((data, index) => (
            <React.Fragment key={index}>
              <Col>
              <p></p>
              <TrendingRecipe name={data.name} image={data.thumbnail_url} description={data.description}
              hours={Math.floor(data.total_time_minutes/60)} minutes={data.total_time_minutes%60}
              positiveRating={data.user_ratings.count_positive} negativeRating={data.user_ratings.count_negative}/>
              </Col>
              {(index + 1) % 2 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
      </Row>
    </Container>

  )
}
