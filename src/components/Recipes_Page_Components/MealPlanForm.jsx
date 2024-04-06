import { useState } from 'react';
import { Container, Row, Form, Button, Dropdown } from 'react-bootstrap';
import './MealPlanForm.css';

export function MealPlanForm({ onFormSubmit }) { 
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [calorieGoal, setCalorieGoal] = useState('');

    const handleDietaryRestriction = (restriction) => {
        setDietaryRestriction(restriction);
    };

    const handleCalorieChange = (e) => {
        setCalorieGoal(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            dietaryRestriction,
            calorieGoal
        };
        console.log('Form sent:', formData);
        onFormSubmit(formData);
    };

    return (
        <Container className='mt-4'>
        <Form onSubmit={handleSubmit}>
            <Row>

            </Row>
                <Row className="mb-3">
                <div className="calorieRow" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Form.Group controlId="calorieGoal" className="col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Form.Label>Input Your Desired Calorie Intake</Form.Label>
                        <a href="https://www.healthline.com/nutrition/how-many-calories-per-day#calculator" 
                            target="_blank" 
                            alt="Link to calorie calculator" 
                            style={{ textDecoration: 'none' }}>
                            Dont know? Click here.
                        </a>
                        <Form.Control
                            type="number"
                            placeholder="Enter calorie goal"
                            value={calorieGoal}
                            onChange={handleCalorieChange}
                            style={{ width: '200px' }}
                        />
                    </Form.Group>
                    <Dropdown>
                        <Dropdown.Toggle variant='dark'>
                            Select Dietary Restriction
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="Dropdown-item">
                            <Dropdown.Item onClick={() => handleDietaryRestriction('dairy_free')}>Dairy Free</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction('vegan')}>Vegan</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction('pescatarian')}>Pescatarian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",gluten_free")}>Gluten Free</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",vegetarian")}>Vegetarian</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Row>
            <Row className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="primary" type="submit" style={{ width: '200px' }}>
                    Create Meal Plan!
                </Button>
            </Row>
        </Form>
    </Container>
    
    );
}
