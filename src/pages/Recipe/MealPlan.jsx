import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MealPlanForm } from '../../components/Recipes_Page_Components/MealPlanForm.jsx';

export function MealPlanPage(){
    const [calorieGoal, setCalorieGoal] = useState('');
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [breakfastRecipes, setBreakfastRecipes] = useState([]);
    const [lunchRecipes, setLunchRecipes] = useState([]);
    const [dinnerRecipes, setDinnerRecipes] = useState([]);
    const navigate = useNavigate();

    const johnsNewApiKey = '1074bbfaddmsh903770c3e2bcd7ep15f945jsn2ee9e13a2410';

    const handleFormSubmit = async (formData) => {
        console.log('Form received in MealPlanPage:', formData);
        const { calorieGoal, dietaryRestriction } = formData; 
        console.log('Calorie Goal:', calorieGoal);
        console.log('Dietary Restriction:', dietaryRestriction);

        setDietaryRestriction(dietaryRestriction);
        setCalorieGoal(calorieGoal);
// -----------------------------------   BREAKFAST   -------------------------------------
        const findSuitableBreakfastRecipe = (recipes, calorieGoal) => {
            const breakfastCals = 0.25 * calorieGoal;
        
            return recipes.find(recipe => {
                const { nutrition } = recipe;
                if (nutrition) {
                    const { calories } = nutrition;
                    if (calories) {
                        const lowerBound = breakfastCals - 60;
                        const upperBound = breakfastCals + 100;
                        return calories >= lowerBound && calories <= upperBound;
                    }
                }
                return false;
            });
        };

        try {
            const randomRecipeStart = Math.floor(Math.random() * 100);
            let breakfastRecipesURL = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=200&tags=meal,breakfast`;
            if (dietaryRestriction) {
                breakfastRecipesURL += `&q=${dietaryRestriction}`;
            }

            const breakfastResponse = await fetch(breakfastRecipesURL, {
                headers: {
                    'X-RapidAPI-Key': johnsNewApiKey,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            });
            const breakfastData = await breakfastResponse.json();
            console.log(breakfastData);

            const suitableBreakfastRecipe = findSuitableBreakfastRecipe(breakfastData.results, calorieGoal);
            if (suitableBreakfastRecipe) {
                console.log("This is the breakfast recipe:", suitableBreakfastRecipe);
                setBreakfastRecipes(suitableBreakfastRecipe);
            } else {
                console.log("No suitable breakfast recipe found.");
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
// -----------------------------------   LUNCH   -------------------------------------
        const findSuitableLunchRecipe = (recipes, calorieGoal) => {
            const lunchCals = 0.30 * calorieGoal;

            return recipes.find(recipe => {
                const { nutrition } = recipe;
                if (nutrition) {
                    const { calories } = nutrition;
                    if (calories) {
                        const lowerBound = lunchCals - 30;
                        const upperBound = lunchCals + 100;
                        return calories >= lowerBound && calories <= upperBound;
                    }
                }
                return false;
            });
        };

        try {
            const randomRecipeStart = Math.floor(Math.random() * 100);
            
            let lunchRecipesURL = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=30&tags=meal,lunch`;
            if (dietaryRestriction) {
                lunchRecipesURL += `&q=${dietaryRestriction}`;
            }

            const lunchResponse = await fetch(lunchRecipesURL, {
                headers: {
                    'X-RapidAPI-Key': johnsNewApiKey,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            });
            const lunchData = await lunchResponse.json();
            console.log(lunchData);

            let suitableLunchRecipe = findSuitableLunchRecipe(lunchData.results, calorieGoal);

            if (suitableLunchRecipe) {
                console.log("This is the lunch recipe:", suitableLunchRecipe);
                setLunchRecipes(suitableLunchRecipe);
            } else {
                console.log("No suitable lunch recipe found.");
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
// -----------------------------------   DINNER   -------------------------------------
        const findSuitableDinnerRecipe = (recipes, calorieGoal) => {
            const dinnerCals = 0.30 * calorieGoal;

            return recipes.find(recipe => {
                const { nutrition } = recipe;
                if (nutrition) {
                    const { calories } = nutrition;
                    if (calories) {
                        const lowerBound = dinnerCals - 30;
                        const upperBound = dinnerCals + 100;
                        return calories >= lowerBound && calories <= upperBound;
                    }
                }
                return false;
            });
        };

        try {
            const randomRecipeStart = Math.floor(Math.random() * 100);
            let dinnerRecipesURL = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=30&tags=meal,dinner`;
            if (dietaryRestriction) {
                dinnerRecipesURL += `&q=${dietaryRestriction}`;
            }

            const dinnerResponse = await fetch(dinnerRecipesURL, {
                headers: {
                    'X-RapidAPI-Key': johnsNewApiKey,
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            });
            const dinnerData = await dinnerResponse.json();
            console.log(dinnerData);

            const suitableDinnerRecipe = findSuitableDinnerRecipe(dinnerData.results, calorieGoal);
            
            
            if (suitableDinnerRecipe) {
                console.log("This is the dinner recipe:", suitableDinnerRecipe);
                setDinnerRecipes(suitableDinnerRecipe);
                console.log("Dinner Calories:", dinnerRecipes.calories);
            } else {
                console.log("No suitable dinner recipe found.");
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    const onMoreDetailsClick = () => {
        navigate( '/RecipeTemplate', { state: {data:dinnerRecipes} })
      }

    return(
        <Container className='mt-4'>
            <Row style={{ justifyContent: 'center' }}>
                <MealPlanForm onFormSubmit={handleFormSubmit} />
            </Row>

            {breakfastRecipes && (
                <Card.Body className='row g-0 '>
                    <Card.Title>Breakfast: {breakfastRecipes.name}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            {breakfastRecipes.description && (
                                <ListGroup.Item>Description: {breakfastRecipes.description}</ListGroup.Item>
                            )}
                            {breakfastRecipes.thumbnail_url && (
                                <Card.Img variant="top" src={breakfastRecipes.thumbnail_url} className="resultImage" />
                            )}
                            {breakfastRecipes.nutrition && (
                                <ListGroup.Item>
                                    Calorie Amount: {breakfastRecipes.nutrition.calories}
                                    <Button variant="dark" onClick={onMoreDetailsClick} style={{ marginLeft: '15px' }}>More Details</Button>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            )}

            {lunchRecipes && (
                <Card.Body className='row g-0 '>
                    <Card.Title>Lunch: {lunchRecipes.name}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            {lunchRecipes.description && (
                                <ListGroup.Item>Description: {lunchRecipes.description}</ListGroup.Item>
                            )}
                            {lunchRecipes.thumbnail_url && (
                                <Card.Img variant="top" src={lunchRecipes.thumbnail_url} className="resultImage" />
                            )}
                            {lunchRecipes.nutrition && (
                                <ListGroup.Item>
                                    Calorie Amount: {lunchRecipes.nutrition.calories}
                                    <Button variant="dark" onClick={onMoreDetailsClick} style={{ marginLeft: '15px' }}>More Details</Button>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            )}

            {dinnerRecipes && (
                <Card.Body className='row g-0 '>
                    <Card.Title>Dinner: {dinnerRecipes.name}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            {dinnerRecipes.description && (
                                <ListGroup.Item>Description: {dinnerRecipes.description}</ListGroup.Item>
                            )}
                            {dinnerRecipes.thumbnail_url && (
                                <Card.Img variant="top" src={dinnerRecipes.thumbnail_url} className="resultImage" />
                            )}
                            {dinnerRecipes.nutrition && (
                                <ListGroup.Item>
                                    Calorie Amount: {dinnerRecipes.nutrition.calories}
                                    <Button variant="dark" onClick={onMoreDetailsClick} style={{ marginLeft: '15px' }}>More Details</Button>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            )}


        </Container>
    );
}