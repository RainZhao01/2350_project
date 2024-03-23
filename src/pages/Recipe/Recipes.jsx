//Ryan's api key 70a26c0309mshf08b2144a2eb1fap129301jsn85b3b4064819

import { Container, Row, Col } from 'react-bootstrap';
import { RecipeOfTheDay } from '../../components/Recipes_Page_Components/Today_Recipe';
import { TrendingRecipe } from '../../components/Recipes_Page_Components/Trending_Recipes';


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
