
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { PropTypes } from 'prop-types';
import { Workout_API_Name, Workout_API_Type, Workout_API_Muscle, Workout_API_Difficulty, Workout_API_Equipment, Workout_API_Instruction} from '../../pages/Workout/Workout_API.jsx'

//This is only a layout for how the Trending Workout componet is going to look like as the Tasty API has not been added
//Paramters need to be added when Api is added
export function TrendingWorkout(props) {

    const index = props.parameter

    return (
        <Card className='m-4' style={{ width: '36rem' }}>
            <div className="row g-0">
                <div className="col-md-6">
                    {/*The scr current links to no image which will need to be changed once API is added*/}
                    <Card.Img variant="top" src="" style={{
                        marginTop: '10px', marginBottom: '10px', marginLeft: '10px',
                        borderRadius: 10
                    }} />
                </div>
                <div className="col-md-6">
                    <Card.Body className='row g-0 '>
                        {/*The Workout name and food description will be added when API is added*/}
                        <Card.Title><Workout_API_Name parameter={index}/></Card.Title>
                        <Card.Text>
                            <ListGroup>
                            <ListGroup.Item>Type: <Workout_API_Type parameter={index}/></ListGroup.Item>
                            <ListGroup.Item>Difficulty: <Workout_API_Difficulty parameter={index}/></ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        {/*Button will link to a different page containing more info on the Workout. It its current state the button does nothing*/}
                        <Button variant="dark">More Details</Button>
                    </Card.Body>
                </div>
            </div>
        </Card>
    )
}

TrendingWorkout.propTypes = {
    parameter: PropTypes.number.isRequired,
  };
  