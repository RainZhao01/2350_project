import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//This is only a layout for the Today Workout component as the Tasty API has not been added
//The parameters will need to be changed when Tasty API is added.
export function WorkoutOfTheDay() {
  return (
    <Card className='m-2' style={{ width: '70rem' }}>
      <div className="row g-0">
        <div className="col-md-7">
          {/*The scr current links to no img which will be changed once API is added*/}
          <Card.Img variant="top" src="" style={{ marginTop: '10px', marginBottom: '10px', borderRadius: 10 }} />
        </div>
        <div className="col-md-5">
          <Card.Body className='row g-0 '>
            {/*The Workout name and food description will be added when API is added*/}
            <Card.Title>Workout name</Card.Title>
            <Card.Text>
              <p>Workout description</p>
            </Card.Text>
            {/*Button will link to a different page containing more info on the Workout. It its current state the button does nothing*/}
            <Button variant="dark">Workout Details</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  )
}


