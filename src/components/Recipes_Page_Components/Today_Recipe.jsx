
//Ryan's Api key: 486012e96fmsh58cbc3385b05d74p190492jsn361fa1f77c9f


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';


import './Today_Recipe.css';

export function RecipeOfTheDay() {
  const [name , setName] = useState();
  const [description , setDescription] = useState();
  const [image, setImage] = useState();
  const [positiveRating, setPositiveRating] = useState();
  const [negativeRating, setNegativeRating] = useState();

  useEffect(() => {
    const date = new Date();
    const currentDay = date.getDay() + 4;
    const dailyRecipeUrl = `https://tasty.p.rapidapi.com/recipes/list?from=${currentDay}&size=1&tags=meal,healthy`;
    
    fetch(dailyRecipeUrl,{
      headers: {
        // 'X-RapidAPI-Key': '486012e96fmsh58cbc3385b05d74p190492jsn361fa1f77c9f',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      } 

    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImage(data["results"][0].thumbnail_url);
        setName(data["results"][0].name);
        setDescription(data["results"][0].description);
        setPositiveRating(data["results"][0].user_ratings.count_positive);
        setNegativeRating(data["results"][0].user_ratings.count_negative);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      })
  }, []);

  return (
    <Card className='m-2' id='rotdCard'>
      <Row className="g-0">
        <Col className="md-4">
          <Card.Img variant="top" id='rotdImage' src={image}/>
        </Col>
        <Col className="md-8">
          <Card.Body className='row g-0, my-auto'>
            <Card.Title>{ name }</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item id='rotdDescription'>{ description }  </ListGroup.Item>
                <ListGroup.Item>&#x1F44D;: { positiveRating } &#128078;: { negativeRating} </ListGroup.Item>
              </ListGroup>
            </Card.Text>
            {/*Button will link to a different page containing more info on the recipe. It its current state the button does nothing*/}
            <Button variant="dark">More Details</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}
