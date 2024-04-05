import { Row, Form, Col, Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react'
import { PropTypes } from 'prop-types';
import FormControl from 'react-bootstrap/FormControl'

import './Search_Bar.css';

//will send the result of the search back to the SearchRecipe.jsx page to get the recipe results.
export function SearchBar({ apiCall }) {

    const [difficulty, setDifficulty] = useState("");
    const [dietaryRestriction, setDietaryRestriction] = useState("");
    const [dietaryRestrictionToggle, setDietaryRestrictionToggle] = useState("Select Dietary Restriction");
    const [cuisine, setCuisine] = useState("");
    const [cuisineToggle, setCuisineToggle] = useState("Select Cuisine");
    const [mealType, setMealType] = useState("");
    const [mealTypeToggle, setMealTypeToggle] = useState("Select Meal Type");
    const [cookingMethod, setCookingMethod] = useState("");
    const [cookingMethodToggle, setCookingMethodToggle] = useState("Select Cooking Method");
    const [recipeName, setRecipeName] = useState("");

    const handleDifficulty = (eventKey) => {
        setDifficulty(eventKey);
    }

    const handleDietaryRestriction = (eventKey) => {
        setDietaryRestriction(eventKey);
        if(eventKey == 'none'){
            setDietaryRestriction("");
            setDietaryRestrictionToggle("Select Dietary Restriction")
        }
        else{
            let Uppercase = eventKey.charAt(1).toUpperCase();
            setDietaryRestrictionToggle(Uppercase + eventKey.substring(2).replace("_"," "));
        }
    }

    const handleCuisine = (eventKey) => {
        setCuisine(eventKey);
        if(eventKey == 'none'){
            setCuisine("");
            setCuisineToggle("Select Cuisine")
        }
        else{
            let Uppercase = eventKey.charAt(1).toUpperCase();
            setCuisineToggle(Uppercase + eventKey.substring(2).replace("_"," "));
        }
    }

    const handleMealType = (eventKey) => {
        setMealType(eventKey);
        if(eventKey == 'none'){
            setMealType("");
            setMealTypeToggle("Select Meal Type")
        }
        else{
            let Uppercase = eventKey.charAt(1).toUpperCase();
            setCuisineToggle(Uppercase + eventKey.substring(2).replace("_"," "));
        }
    }

    const handleCookingMethod = (eventKey) => {
        setCookingMethod(eventKey);
        if(eventKey == 'none'){
            setCookingMethod("");
            setCookingMethodToggle("Select Cooking Method")
        }
        else{
            let Uppercase = eventKey.charAt(1).toUpperCase();
            setCookingMethodToggle(Uppercase + eventKey.substring(2).replace("_"," "));
        }
    }

    const handleChange = (eventKey) => {
        setRecipeName(eventKey);
    }

    const getUrl = () => {
        apiCall(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=healthy${difficulty}${dietaryRestriction}${cuisine}${mealType}${cookingMethod}&q=${recipeName.trim().replace(" ","%20")}`)
    }

    const afterSubmission = (eventKey) => {
        eventKey.preventDefault();
    }

    return (
        <Form onSubmit={afterSubmission}>
            <Row>
                <Col id='Search-Bar'>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        value={recipeName}
                        onChange={(e) => handleChange(e.target.value)}
                    />
                </Col>
                <Col id='Search-Submit' xs='auto'>
                    <Button onClick={() => getUrl()} type="submit">Submit</Button>
                </Col>
            </Row>
            <Row xs="auto">
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant='dark'>
                            {cuisineToggle}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="Dropdown-item">
                            <Dropdown.Item onClick={() => handleCuisine("none")}>None</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",african")}>African</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",american")}>American</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",brazilian")}>Brazilian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",british")}>British</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",caribbean")}>Caribbean</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",chinese")}>Chinese</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",cuban")}>Cuban</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",dominican")}>Dominican</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",ethiopian")}>Ethiopian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",filipino")}>Filipino</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",french")}>French</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",german")}>German</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",greek")}>Greek</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",haitian")}>Haitian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",hawaiian")}>Hawaiian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",indian")}>Indian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",indigenous")}>Indigenous</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",italian")}>Italian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",jamaican")}>Jamaican</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",japanese")}>Japanese</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",kenyan")}>Kenyan</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",korean")}>Korean</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",latin_american")}>Latin American</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",laotian")}>Laotian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",lebanese")}>Lebanese</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",mexican")}>Mexican</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",middle_eastern")}>Middle Eastern</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",persian")}>Persian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",peruvian")}>Peruvian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",puerto_rican")}>Puerto Rican</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",south_african")}>South African</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",swedish")}>Swedish</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",taiwanese")}>Taiwanese</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",thai")}>Thai</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",vietnamese")}>Vietnamese</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",venezuelan")}>Venezuelan</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCuisine(",west_african")}>West African</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant='dark'>
                            {dietaryRestrictionToggle}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="Dropdown-item">
                            <Dropdown.Item onClick={() => handleDietaryRestriction("none")}>None</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",contains_alcohol")}>Contains Alcohol</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",dairy_free")}>Dairy Free</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",gluten_free")}>Gluten Free</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",indulgent_sweets")}>Indulgent Sweets</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",low_carb")}>Low Carb</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",pescatarian")}>Pescatarian</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",vegan")}>Vegan</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDietaryRestriction(",vegetarian")}>Vegetarian</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant='dark'>
                            {cookingMethodToggle}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="Dropdown-item">
                            <Dropdown.Item onClick={() => handleCookingMethod("none")}>None</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCookingMethod("bake")}>Bake</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCookingMethod("deep_fry")}>Deep Fry</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCookingMethod("grill")}>Grill</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCookingMethod("pan_fry")}>Pan Fry</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleCookingMethod("steam")}>Steam</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant='dark'>
                            Select Difficulty
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="Dropdown-item">
                            <Dropdown.Item onClick={() => handleDifficulty("none")}>None</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDifficulty(",easy")}>Easy</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDifficulty(",under_30_minute")}>Under 30 Minutes</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDifficulty(",5_ingredients_or_less")}>5 Ingredients Or Less</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant='dark'>
                            {mealTypeToggle}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="Dropdown-item">
                            <Dropdown.Item onClick={() => handleMealType("none")}>None</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleMealType(",breakfast")}>Breakfast</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleMealType(",lunch")}>Lunch</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleMealType(",dinner")}>Dinner</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Form>
    )
}
SearchBar.propTypes = {
    apiCall: PropTypes.func.isRequired,
};