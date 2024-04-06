
import { Container, Row, Col, DropdownButton, Dropdown, Form } from 'react-bootstrap';
import { WorkoutOfTheDay } from '../../components/Workout_Page_Component/Today_Workout';
import { TrendingWorkout } from '../../components/Workout_Page_Component/Trending_Workout';

import { useState, useEffect } from 'react'
import React from 'react'
export function Workout() {
  let randomNum;
  const [muscle, setMuscle] = useState([]);
  const [filter, setFilter] = useState(false);

  const [selectedImage, setSelectedImage] = useState('/abdominis.png');
  const [selectedMuscle, setSelectedMuscle] = useState('abdominals');
  const [selectedType, setSelectedType] = useState('strength');
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');

  const handleSelect = (muscle, type, difficulty, imgSrc) => {
    setSelectedImage(imgSrc);
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
          <Col>
            <Form>
              <Form.Check 
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
              <Dropdown.Item onClick={() => handleSelect("abdominals", selectedType, selectedDifficulty, "/abdominis.png")}>abdominals</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("abductors", selectedType, selectedDifficulty, "/abductors.jpg")}>abductors</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("biceps", selectedType, selectedDifficulty, "/biceps.jpg")}>biceps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("calves", selectedType, selectedDifficulty, "/calves.jpg")}>calves</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("chest", selectedType, selectedDifficulty, "/chest.jpg")}>chest</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("forearms", selectedType, selectedDifficulty, "/forearms.jpg")}>forearms</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("glutes", selectedType, selectedDifficulty, "/glutes.jpg")}>glutes</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("hamstrings", selectedType, selectedDifficulty, "/hamstrings.jpg")}>hamstrings</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("lower_back", selectedType, selectedDifficulty, "/lower_back.jpg")}>lower back</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("middle_back", selectedType, selectedDifficulty, "/mid_back.jpg")}>middle back</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("neck", selectedType, selectedDifficulty, "/neck.jpg")}>neck</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("quadriceps", selectedType, selectedDifficulty, "/quadriceps.jpg")}>quadriceps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("traps", selectedType, selectedDifficulty, "/traps.jpg")}>traps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("triceps", selectedType, selectedDifficulty, "/triceps.jpg")}>triceps</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect("lats", selectedType, selectedDifficulty, "/lats.jpg")}>lats</Dropdown.Item>
            </DropdownButton></Col>
          <Col className="justify-content-md-center mb-4">
            <h5>Select your type: </h5>
            <DropdownButton variant="dark" id="dropdown-basic-button" title={selectedType}>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "strength", selectedDifficulty, selectedImage)}>strength</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "stretching", selectedDifficulty, selectedImage)}>stretching</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "strongman", selectedDifficulty, selectedImage)}>strongman</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "powerlifting", selectedDifficulty, selectedImage)}>powerlifting</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "cardio", selectedDifficulty, selectedImage)}>cardio</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, "olympic_weightlifting", selectedDifficulty, selectedImage)}>olympic weightlifting</Dropdown.Item>
            </DropdownButton></Col>
          <Col className="justify-content-md-center mb-4">
            <h5 >Select your Difficulty: </h5>
            <DropdownButton variant="dark" id="dropdown-basic-button" title={selectedDifficulty}>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, selectedType, "beginner", selectedImage)}>beginner</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, selectedType, "intermediate", selectedImage)}>intermediate</Dropdown.Item>
              <Dropdown.Item onClick={() => handleSelect(selectedMuscle, selectedType, "expert", selectedImage)}>expert</Dropdown.Item>
            </DropdownButton></Col>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <h4>Workout of the day</h4>
          {muscle.map((data, index) => (
            <React.Fragment key={index}>
              {index == randomNum && (
                <Col><WorkoutOfTheDay name={data.name} type={data.type} muscle={data.muscle} equipment={data.equipment} difficulty={data.difficulty} instructions={data.instructions} image={selectedImage} /></Col>
              )}
            </React.Fragment>
          ))}
        </Row>
        <Row>
          <h5>Trending Workouts</h5>
            {muscle.map((data, index) => (
            <React.Fragment key={index}>
              { filter && data.type == selectedType && data.difficulty == selectedDifficulty && (
                <Col><TrendingWorkout name={data.name} type={data.type} muscle={data.muscle} equipment={data.equipment} difficulty={data.difficulty} instructions={data.instructions} image={selectedImage}/></Col>
              )}
              {!filter && (
                <Col><TrendingWorkout name={data.name} type={data.type} muscle={data.muscle} equipment={data.equipment} difficulty={data.difficulty} instructions={data.instructions} image={selectedImage} /></Col>
              )}
              {(index + 1) % 2 === 0 && <div className="w-100"></div>}
            </React.Fragment>
         ))}
        </Row> 
      </Container>
    </>
  );
}

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

