import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { WorkoutOfTheDay } from '../../components/Workout_Page_Component/Today_Workout';
import { TrendingWorkout } from '../../components/Workout_Page_Component/Trending_Workout';

export function Workout() {
  return (

    <Container className='mt-4'>
      <Row style={{ justifyContent: 'center' }}>
        <h4>Workout of the day</h4>
        <WorkoutOfTheDay />
      </Row>
      <Row>
        <h5>Trending_Workouts</h5>
        <Col><TrendingWorkout /></Col>
        <Col><TrendingWorkout /></Col>
        <div className="w-100"></div>
        <Col><TrendingWorkout /></Col>
        <Col><TrendingWorkout /></Col>
      </Row>
    </Container>

  )
}
