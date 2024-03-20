import { Container, Row, Col } from 'react-bootstrap';
import { WorkoutOfTheDay } from '../../components/Workout_Page_Component/Today_Workout';
import { TrendingWorkout } from '../../components/Workout_Page_Component/Trending_Workout';

export function Workout() {
  let index = 0;
  let name, type, muscle, equipment, difficulty, instructions;

  return (

    <Container className='mt-4'>
      <Row style={{ justifyContent: 'center' }}>
        <h4>Workout of the day</h4>
        <WorkoutOfTheDay />
      </Row>
      <Row>
        <h5>Trending_Workouts</h5>
        <Col><TrendingWorkout parameter={index} /></Col>
        <Col><TrendingWorkout parameter={index+1}/></Col>
        <div className="w-100"></div>
        <Col><TrendingWorkout parameter={index+2}/></Col>
        <Col><TrendingWorkout parameter={index+3}/></Col>
      </Row>
    </Container>

  )
}
