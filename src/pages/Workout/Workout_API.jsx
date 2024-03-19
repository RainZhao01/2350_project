// Nam's APIKEY = 8WacI8oTPJlw4eKy8o/G5w==Y8ImexMsyoESAfaG
// link api documentation https://api-ninjas.com/api/exercises

import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'

import WorkoutData from './Workout_Json/biceps.json'

export function WAPI() {
  return (
      <>
      <div>
        <h1>Muscles</h1>
        <ul>
          <li key={0}>{WorkoutData[0].name}</li>
          <li key={0}>{WorkoutData[0].type}</li>
          <li key={0}>{WorkoutData[0].muscle}</li>
          <li key={0}>{WorkoutData[0].equipment}</li>
          <li key={0}>{WorkoutData[0].difficulty}</li>
          <li key={0}>{WorkoutData[0].instructions}</li>
        </ul>
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