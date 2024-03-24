//Ryan's Api key: 486012e96fmsh58cbc3385b05d74p190492jsn361fa1f77c9f

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {useState, useEffect} from 'react'


export function RecipeOfTheDay() {
  const [name , setName] = useState();
  const [description , setDescription] = useState();
  const [image, setImage] = useState();
  const [hours , setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [positiveRating, setPositiveRating] = useState();
  const [negativeRating, setNegativeRating] = useState();

  //does not change daily.
  useEffect(() => {
    const dailyRecipeUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&tags=meal,healthy';
    
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
        setHours(Math.floor(data["results"][0].total_time_minutes/60));
        setMinutes(data["results"][0].total_time_minutes%60);
        setPositiveRating(data["results"][0].user_ratings.count_positive);
        setNegativeRating(data["results"][0].user_ratings.count_negative);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      })
  }, []);

  return (
    <Card className='m-2' style={{ width: '70rem' }}>
      <div className="row g-0">
        <div className="col-md-7">
          <Card.Img variant="top" src={image} style={{ marginTop: '10px', marginBottom: '10px', borderRadius: 10 }} />
        </div>
        <div className="col-md-5">
          <Card.Body className='row g-0 '>
            <Card.Title>{ name }</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Time: { hours } hours { minutes } minutes. </ListGroup.Item>
                <ListGroup.Item>Description: { description } </ListGroup.Item>
                <ListGroup.Item>Rating Positive: { positiveRating } Negative: { negativeRating} </ListGroup.Item>
              </ListGroup>
            </Card.Text>
            {/*Button will link to a different page containing more info on the recipe. It its current state the button does nothing*/}
            <Button variant="dark">More Details</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  )
}
