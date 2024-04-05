import { Container, Row, Col, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import { WorkoutOfTheDay } from '../../components/Workout_Page_Component/Today_Workout';
import { TrendingWorkout } from '../../components/Workout_Page_Component/Trending_Workout';

import { useState, useEffect } from 'react'
import React from 'react'
export function Workout() {
  let randomNum;
  const [muscle, setMuscle] = useState([]);
  const [filter, setFilter] = useState(false);

  const [selectedMuscle, setSelectedMuscle] = useState('abdominals');
  const [selectedType, setSelectedType] = useState('strength');
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');

  const handleSelect = (muscle, type, difficulty) => {
    console.log(muscle)
    console.log(type)
    console.log(difficulty)

    setSelectedMuscle(muscle);
    setSelectedType(type);
    setSelectedDifficulty(difficulty);
  };

  const muscleLength = () => {
    return muscle.length
  }

  const trendingWorkout = () => {
    return Math.floor(Math.random() * (muscleLength() - 1) + 1);
  };

  useEffect(() => {
    const apiURL = `https://api.api-ninjas.com/v1/exercises?muscle=${selectedMuscle}`
    // Uncomment only if you are trying to test/run workout API
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

  randomNum = trendingWorkout();
  return (
    <>
      <Container className='mt-4'>
        <Row>
          {/* <Col className="justify-content-md-center mb-4">
            <h5 >Filter: </h5>
            <DropdownButton variant="dark" id="dropdown-basic-button" title={selectedMuscle}>
            </DropdownButton></Col> */}
          <Col>
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Enable Filter"
                onChange={() => setFilter(!filter)}
              />
            </Form>
          </Col>
          <Col className="justify-content-md-center mb-4">
            <h5 >Select your Muscle Group: </h5>
            <DropdownButton variant="dark" id="dropdown-basic-button" title={selectedMuscle}>
              <Dropdown.Item onClick={() => handleSelect("abdominals", selectedType, selectedDifficulty)}>abdominals</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("abductors", selectedType, selectedDifficulty)}>abductors</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("biceps", selectedType, selectedDifficulty)}>biceps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("calves", selectedType, selectedDifficulty)}>calves</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("chest", selectedType, selectedDifficulty)}>chest</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("forearms", selectedType, selectedDifficulty)}>forearms</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("glutes", selectedType, selectedDifficulty)}>glutes</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("hamstrings", selectedType, selectedDifficulty)}>hamstrings</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("lower_back", selectedType, selectedDifficulty)}>lower back</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("middle_back", selectedType, selectedDifficulty)}>middle back</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("neck", selectedType, selectedDifficulty)}>neck</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("quadriceps", selectedType, selectedDifficulty)}>quadriceps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("traps", selectedType, selectedDifficulty)}>traps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("triceps", selectedType, selectedDifficulty)}>triceps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("lats", selectedType, selectedDifficulty)}>lats</Dropdown.Item>
            </DropdownButton></Col>
          <Col className="justify-content-md-center mb-4">
            <h5>Select your type: </h5>
            <DropdownButton variant="dark" id="dropdown-basic-button" title={selectedType}>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "strength", selectedDifficulty)}>strength</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "stretching", selectedDifficulty)}>stretching</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "strongman", selectedDifficulty)}>strongman</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "powerlifting", selectedDifficulty)}>powerlifting</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "cardio", selectedDifficulty)}>cardio</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "olympic_weightlifting", selectedDifficulty)}>olympic weightlifting</Dropdown.Item>
            </DropdownButton></Col>
          <Col className="justify-content-md-center mb-4">
            <h5 >Select your Difficulty: </h5>
            <DropdownButton variant="dark" id="dropdown-basic-button" title={selectedDifficulty}>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, selectedType, "beginner")}>beginner</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, selectedType, "intermediate")}>intermediate</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, selectedType, "expert")}>expert</Dropdown.Item>
            </DropdownButton></Col>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <h4>Workout of the day</h4>
          {muscle.map((data, index) => (
            <React.Fragment key={index}>
              {index == randomNum && (
                <Col><WorkoutOfTheDay name={data.name} type={data.type} muscle={data.muscle} equipment={data.equipment} difficulty={data.difficulty} instructions={data.instructions} /></Col>
              )}
            </React.Fragment>
          ))}
        </Row>
        <Row>
          <h5>Trending Workouts</h5>
          {muscle.map((data, index) => (
            <React.Fragment key={index}>
              { filter && data.type == selectedType && data.difficulty == selectedDifficulty && (
                <Col><TrendingWorkout name={data.name} type={data.type} muscle={data.muscle} equipment={data.equipment} difficulty={data.difficulty} instructions={data.instructions} /></Col>
              )}
              {!filter &&(
                <Col><TrendingWorkout name={data.name} type={data.type} muscle={data.muscle} equipment={data.equipment} difficulty={data.difficulty} instructions={data.instructions} /></Col>
              )}
              {(index + 1) % 2 === 0 && <div className="w-100"></div>}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

