import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//This is only a layout for how the Trending Workout componet is going to look like as the Tasty API has not been added
//Paramters need to be added when Api is added
export function TrendingWorkout() {
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
                        <Card.Title>Workout name</Card.Title>
                        <Card.Text>
                            <p>Workout description</p>
                        </Card.Text>
                        {/*Button will link to a different page containing more info on the Workout. It its current state the button does nothing*/}
                        <Button variant="dark">More Details</Button>
                    </Card.Body>
                </div>
            </div>
        </Card>
    )
}