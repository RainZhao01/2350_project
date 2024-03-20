// Nam's APIKEY = 8WacI8oTPJlw4eKy8o/G5w==Y8ImexMsyoESAfaG
// link api documentation https://api-ninjas.com/api/exercises

import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types';

import WorkoutData from './Workout_Json/biceps.json'


export function Workout_API(index) {
  return (
      <>
      <div>
        <h1 key={index}>{WorkoutData[0].name}</h1>
        <h1 key={index}>{WorkoutData[0].type}</h1>
        <h1 key={index}>{WorkoutData[0].muscle}</h1>
        <h1 key={index}>{WorkoutData[0].equipment}</h1>
        <h1 key={index}>{WorkoutData[0].difficulty}</h1>
        <h1 key={index}>{WorkoutData[0].instructions}</h1>

      </div>
      </>
    )
}

export function Workout_API_Name(props) {
  return (
      <>
      <div>
         {WorkoutData[props.parameter].name}
      </div>
      </>
    )
}

Workout_API_Name.propTypes = {
  parameter: PropTypes.number.isRequired,
};


export function Workout_API_Type(props) {
  return (
    <>
    {WorkoutData[props.parameter].type}
    </>
  )
}

Workout_API_Type.propTypes = {
  parameter: PropTypes.number.isRequired,
};

export function Workout_API_Muscle() {
  return (
    <>
    <div>
        {WorkoutData[0].muscle}
    </div>
    </>
  )
}

export function Workout_API_Equipment() {
  return (
    <>
    <div>
        {WorkoutData[0].equipment}
    </div>
    </>
  )
}

export function Workout_API_Difficulty(props) {
  return (
    <>
      {WorkoutData[props.parameter].difficulty}
    </>
  )
}

Workout_API_Difficulty.propTypes = {
  parameter: PropTypes.number.isRequired,
};

export function Workout_API_Instruction() {
  return (
    <>
    <div>
        {WorkoutData[0].instructions}
    </div>
    </>
  )
}



  //Call API from website

  // const [muscle, setMuscle] = useState([]);

  // useEffect(() => {
  //   const muscle = 'biceps'
  //   const apiURL = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`
  //   const apiKey = '8WacI8oTPJlw4eKy8o/G5w==Y8ImexMsyoESAfaG'
  
    
  //     fetch(apiURL, {
  //       headers: {
  //           'X-Api-Key': `${apiKey}`,
  //           'Content-Type': 'application/json'
  //       }})
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMuscle(data)
  //     .catch((error) => {
  //       console.error('Error featch data: ', error);
  //     })
  //       // console.log(data[0].name)
  //     });
  //   }, []);
  // 
  //       return (
  //     <div>
  //     <h1>Muscles</h1>
  //     <ul>
  //       {muscle.map((data, index) => (
  //         <li key={index}>{data.name}</li>
  //       ))}
  //     </ul>
  //   </div>
  //   );
  
// Call via json file

// return (
  //   <>
  //   <div>
  //     <h1>Muscles</h1>
  //     <ul>
  //       <li key={0}>{WorkoutData[0].name}</li>
  //       <li key={0}>{WorkoutData[0].type}</li>
  //       <li key={0}>{WorkoutData[0].muscle}</li>
  //       <li key={0}>{WorkoutData[0].equipment}</li>
  //       <li key={0}>{WorkoutData[0].difficulty}</li>
  //       <li key={0}>{WorkoutData[0].instructions}</li>
  //     </ul>
  //   </div>
  //   </>
  // )