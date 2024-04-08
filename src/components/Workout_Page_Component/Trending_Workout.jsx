import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// import { Workout_API_Name, Workout_API_Type, Workout_API_Muscle, Workout_API_Difficulty, Workout_API_Equipment, Workout_API_Instruction} from '../../pages/Workout/Workout_API.jsx'

//This is only a layout for how the Trending Workout componet is going to look like as the Tasty API has not been added
//Paramters need to be added when Api is added
export function TrendingWorkout(props) {
    let name = props.name;
    let type = props.type;
    let muscle = props.muscle;
    let equipment = props.equipment;
    let difficulty = props.difficulty;
    let instructions = props.instructions;
    let image = props.image;

    return (
        <Card className='m-4' style={{ width: '36rem' }}>
            <div className="row g-0">
                <div className="col-md-6">
                    {/*The scr current links to no image which will need to be changed once API is added*/}
                    <Card.Img variant="top" src={image} alt= "workout image" style={{
                        marginTop: '10px', marginBottom: '10px', marginLeft: '10px',
                        borderRadius: 10
                    }} />
                </div>
                <div className="col-md-6">
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


TrendingWorkout.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    muscle: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired

};
