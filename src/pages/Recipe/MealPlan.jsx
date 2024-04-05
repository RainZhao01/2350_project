import { Container, Row } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import { MealPlanForm } from '../../components/Recipes_Page_Components/MealPlanForm.jsx';

export function MealPlanPage(){
    const [calorieGoal, setCalorieGoal] = useState('');
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [amountOfMeals, setAmountOfMeals] = useState(0);
    // const [recipes, setRecipes] = useState([]);
    const [breakfastRecipes, setBreakfastRecipes] = useState([]);
    const [lunchRecipes, setLunchRecipes] = useState([]);
    const [dinnerRecipes, setDinnerRecipes] = useState([]);

    const handleFormSubmit = async (formData) => {
        // Receive data and split into consts
        console.log('Form received in MealPlanPage:', formData);
        const { calorieGoal } = formData;
        console.log('Calorie Goal:', calorieGoal);

        setCalorieGoal(calorieGoal);
// -----------------------------------   BREAKFAST   -------------------------------------
        const findSuitableBreakfastRecipe = (recipes, calorieGoal) => {
            const breakfastCals = 0.25 * calorieGoal;
        
            return recipes.find(recipe => {
                const { nutrition } = recipe;
                if (nutrition) {
                    const { calories } = nutrition;
                    if (calories) {
                        const lowerBound = breakfastCals - 100;
                        const upperBound = breakfastCals + 100;
                        return calories >= lowerBound && calories <= upperBound;
                    }
                }
                return false;
            });
        };

        try {
            const randomRecipeStart = Math.floor(Math.random() * 100);
            const breakfastRecipesURL = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=30&tags=meal,breakfast`;

            const breakfastResponse = await fetch(breakfastRecipesURL, {
                headers: {
                    'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
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
                        const lowerBound = lunchCals - 100;
                        const upperBound = lunchCals + 100;
                        return calories >= lowerBound && calories <= upperBound;
                    }
                }
                return false;
            });
        };

        try {
            const randomRecipeStart = Math.floor(Math.random() * 100);
            const lunchRecipesURL = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=30&tags=meal,lunch`;

            const lunchResponse = await fetch(lunchRecipesURL, {
                headers: {
                    'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            });
            const lunchData = await lunchResponse.json();
            console.log(lunchData);

            const suitableLunchRecipe = findSuitableLunchRecipe(lunchData.results, calorieGoal);
            if (suitableLunchRecipe) {
                console.log("This is the lunch recipe:", suitableLunchRecipe);
                setBreakfastRecipes(suitableLunchRecipe);
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
                        const lowerBound = dinnerCals - 100;
                        const upperBound = dinnerCals + 100;
                        return calories >= lowerBound && calories <= upperBound;
                    }
                }
                return false;
            });
        };

        try {
            const randomRecipeStart = Math.floor(Math.random() * 100);
            const dinnerRecipesURL = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=30&tags=meal,dinner`;

            const dinnerResponse = await fetch(dinnerRecipesURL, {
                headers: {
                    'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
                    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                }
            });
            const dinnerData = await dinnerResponse.json();
            console.log(dinnerData);

            const suitableDinnerRecipe = findSuitableDinnerRecipe(dinnerData.results, calorieGoal);
            if (suitableDinnerRecipe) {
                console.log("This is the dinner recipe:", suitableDinnerRecipe);
                setBreakfastRecipes(suitableDinnerRecipe);
            } else {
                console.log("No suitable dinner recipe found.");
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    return(
        <Container className='mt-4'>
            <Row style={{ justifyContent: 'center' }}>
                <MealPlanForm onFormSubmit={handleFormSubmit} />
            </Row>
        </Container>
    );
}