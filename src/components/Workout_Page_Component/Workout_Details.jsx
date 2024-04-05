import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
export function Workout_Details() {
    const location = useLocation()
    const { name } = location.state
    const { type } = location.state
    const { muscle } = location.state
    const { equipment } = location.state
    const { difficulty } = location.state
    const { instructions } = location.state
//1
    const handleAddToYourWorkout = () => {
        const workout = { name, type, muscle, equipment, difficulty, instructions };
        addWorkout(workout);
        history.push('/your-workouts');
    };
    //1
    return (
        <Container className='mt-4'>
            <Row className='justify-content-center mb-4'>
                <h4>Workout Details</h4>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title><strong>{name}</strong></Card.Title>
                            <Card.Text>
                            <ListGroup>
                                <ListGroup.Item><strong>Type</strong>: {type} </ListGroup.Item>
                                <ListGroup.Item><strong>Muscle</strong>: {muscle} </ListGroup.Item>
                                <ListGroup.Item><strong>Equipment</strong>: {equipment} </ListGroup.Item>
                                <ListGroup.Item><strong>Difficulty</strong>: {difficulty} </ListGroup.Item>
                                <ListGroup.Item><strong>Instructions</strong>: {instructions} </ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                            <Button variant='primary' onClick={handleAddToYourWorkout}>Add to Your Workout</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
