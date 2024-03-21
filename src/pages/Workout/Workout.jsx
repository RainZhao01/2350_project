import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { WorkoutOfTheDay } from '../../components/Workout_Page_Component/Today_Workout';
import { TrendingWorkout } from '../../components/Workout_Page_Component/Trending_Workout';
import { useState, useEffect } from 'react'
import React from 'react';

export function Workout() {
  const [muscle, setMuscle] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState('abdominals');

  useEffect(() => {
    // const muscle = selectedMuscle
    const apiURL = `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}`
    const apiKey = '8WacI8oTPJlw4eKy8o/G5w==Y8ImexMsyoESAfaG'


    fetch(apiURL, {
      headers: {
        'X-Api-Key': `${apiKey}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setMuscle(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [selectedMuscle]);


  const handleSelect = (eventKey) => {
    console.log('Selected Muscle:', eventKey);
    setSelectedMuscle(eventKey);
  };

  return (
    <>


      <DropdownButton id="dropdown-basic-button" title="Select Muscle">
        <Dropdown.Item onClick={() => handleSelect("abdominals")}>abdominals</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("abductors")}>abductors</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("biceps")}>biceps</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("calves")}>calves</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("chest")}>chest</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("forearms")}>forearms</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("glutes")}>glutes</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("hamstrings")}>hamstrings</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("lower_back")}>lower back</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("middle_back")}>middle back</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("neck")}>neck</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("quadriceps")}>quadriceps</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("traps")}>traps</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("triceps")}>triceps</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect("lats")}>lats</Dropdown.Item>
      </DropdownButton>

      <Container className='mt-4'>
        <Row style={{ justifyContent: 'center' }}>
          <h4>Workout of the day</h4>
          <WorkoutOfTheDay />
        </Row>
        <Row>
          <h5>Trending_Workouts</h5>
          {muscle.map((data, index) => (
            <React.Fragment key={index}>
              <Col><TrendingWorkout name={data.name} type={data.type} difficulty={data.difficulty} /></Col>
              {(index + 1) % 2 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

