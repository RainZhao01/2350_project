import { useState } from 'react';
import { Container, Row, Form, Button, Dropdown } from 'react-bootstrap';

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
                <Row className="mb-3">
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
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="calorieGoal" className="mb-3">
                        <Form.Label>Input your Calorie Goal</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter calorie goal"
                            value={calorieGoal}
                            onChange={handleCalorieChange}
                        />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Create Meal Plan!
                </Button>
            </Form>
        </Container>
    );
}
