import { Row, Form, Col, Button, DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import {useState, useEffect} from 'react'
// import React from 'react';

import './Search_Bar.css';

//will send the result of the search back to the SearchRecipe.jsx page to get the recipe results.
export function SearchBar() {
    const [difficulty, setDifficulty] = useState("Difficulty");
    const [dietaryRestriction, setDietaryRestriction] = useState("Dietary Restriction");
    const [cuisine, setCuisine] = useState("Cuisine");
    const [mealType, setMealType] = useState("Meal Type");
    const [cookingMethod, setCookingMethod] = useState("Cooking Method");

    const handleDifficulty = (eventKey) => {
        setDifficulty(eventKey);
    }

    const handleDietaryRestriction = (eventKey) => {
        setDietaryRestriction(eventKey);
    }
    
    const handleCuisine = (eventKey) =>{
        setCuisine(eventKey);
    }

    const handleMealType = (eventKey) =>{
        setMealType(eventKey);
    }

    const handleCookingMethod = (eventKey) =>{
        setCookingMethod(eventKey);
    }


    return (
        <Form >
            <Row>
                <Col style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }} >
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Submit</Button>
                </Col>
            </Row>
            <Row xs="auto">
                {/*Need to make a Dropdown for the tags for all sections*/}
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Dietary Restriction">
                        <Dropdown.Item onClick={() => handleDietaryRestriction("dairy_free")}>Dairy Free</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("vegan")}>Vegan</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("pescatarian")}>Pescatarian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("contains_alcohol")}>Contains Alcohol</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("low_carb")}>Low Carb</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("indulgent_sweets")}>Indulgent Sweets</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("vegetarian")}>Vegetarian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDietaryRestriction("gluten_free")}>Gluten Free</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Selete Cooking Method">
                        <Dropdown.Item onClick={() => handleCookingMethod("something")}>something</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className='Dropdown' title="Select Difficulty">
                        <Dropdown.Item onClick={() => handleDifficulty("easy")}>Easy</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDifficulty("under_30_minute")}>Under 30 Minutes</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDifficulty("5_ingredients_or_less")}>5 Ingredients Or Less</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Cuisine">
                        <Dropdown.Item onClick={() => handleCuisine("something")}>something</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Meal Type">
                        <Dropdown.Item onClick={() => handleMealType("breakfast")}>Breakfast</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleMealType("lunch")}>Lunch</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleMealType("dinner")}>Breakfast</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Form>
    )
}
