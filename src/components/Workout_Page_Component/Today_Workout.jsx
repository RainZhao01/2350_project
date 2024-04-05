import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

//This is only a layout for the Today Workout component as the Tasty API has not been added
//The parameters will need to be changed when Tasty API is added.
export function WorkoutOfTheDay(props) {
  let name = props.name;
  let type = props.type;
  let muscle = props.muscle;
  let equipment = props.equipment;
  let difficulty = props.difficulty;
  let instructions = props.instructions;

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
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <ListGroup>
                <ListGroup.Item>Type: {type} </ListGroup.Item>
                <ListGroup.Item>Difficulty: {difficulty} </ListGroup.Item>
              </ListGroup>
            </Card.Text>
            <Link to='../Workout_Details'
              state={{
                name: name,
                type: type,
                muscle: muscle,
                equipment: equipment,
                difficulty: difficulty,
                instructions: instructions
              }}
            ><Button variant="dark">More Details</Button></Link>
          </Card.Body>
        </div>
      </div>
    </Card>
  )
}

WorkoutOfTheDay.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  muscle: PropTypes.string.isRequired,
  equipment: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired
};
