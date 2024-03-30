import { Row, Form, Col, Button, DropdownButton} from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import {useState} from 'react'
import { PropTypes } from 'prop-types';
import FormControl from 'react-bootstrap/FormControl'

// import React from 'react';

import './Search_Bar.css';

//will send the result of the search back to the SearchRecipe.jsx page to get the recipe results.
export function SearchBar({apiCall}) {
    
    const [difficulty, setDifficulty] = useState("");
    const [dietaryRestriction, setDietaryRestriction] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [mealType, setMealType] = useState("");
    const [cookingMethod, setCookingMethod] = useState("");
    const [recipeName, setRecipeName] = useState("");

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
    const handleChange = (eventKey) =>{
        console.log(eventKey);
        setRecipeName(eventKey);
    }

    const getUrl = () =>{
        apiCall(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&q=${recipeName}&tags=meal,healthy,${difficulty},${dietaryRestriction},${cuisine},${mealType},${cookingMethod}`)
    }

    return (
        <Form >
            <Row>
                <Col style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }} >
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        value={recipeName}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </Col>
                <Col xs="auto">
                    <Button onClick={() => getUrl()} type="submit">Submit</Button>
                </Col>
            </Row>
            <Row xs="auto">
                {/*Need to make a Dropdown for the tags for all sections*/}
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Cuisine">
                        <Dropdown.Item onClick={() => handleCuisine("british")}>British</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("italian")}>Italian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("mexican")}>Mexican</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("middle_eastern")}>Middle Eastern</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("dominican")}>Dominican</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("puerto_rican")}>Puerto Rican</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("greek")}>Greek</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("indian")}>Indian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("thai")}>Thai</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("hawaiian")}>Hawaiian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("ethiopian")}>Ethiopian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("west_african")}>West African</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("peruvian")}>Peruvian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("cuban")}>Cuban</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("brazilian")}>Brazilian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("taiwanese")}>Taiwanese</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("haitian")}>Haitian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("german")}>German</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("japanese")}>Japanese</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("korean")}>Korean</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("african")}>African</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("caribbean")}>Caribbean</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("filipino")}>Filipino</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("south_african")}>South African</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("jamaican")}>Jamaican</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("american")}>American</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("chinese")}>Chinese</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("french")}>French</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("latin_american")}>Latin American</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("vietnamese")}>Vietnamese</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("kenyan")}>Kenyan</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("swedish")}>Swedish</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("persian")}>Persian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("lebanese")}>Lebanese</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("indigenous")}>Indigenous</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("Laotian")}>laotian</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCuisine("venezuelan")}>Venezuelan</Dropdown.Item>
                    </DropdownButton>
                </Col>
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

SearchBar.propTypes = {
    apiCall: PropTypes.func.isRequired,
};