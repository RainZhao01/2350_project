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
                console.log("This is the recipe:", suitableBreakfastRecipe);
                setBreakfastRecipes(suitableBreakfastRecipe);
            } else {
                console.log("No suitable breakfast recipe found.");
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }

        let breakfastCals = 0.25 * calorieGoal;
        let lunchCals = 0.35 * calorieGoal;
        let dinnerCals = 0.35 * calorieGoal;
        console.log("Breakfast CalGoal, " + breakfastCals + " Breakfast CalGoal, " + lunchCals + " Breakfast CalGoal, " + dinnerCals);
    };

    // const findSuitableBreakfastRecipe = (recipes, calorieGoal) => {
    //     const breakfastCals = 0.25 * calorieGoal;

    //     return recipes.find(recipe => {
    //         const { nutrition } = recipe;
    //         const { calories } = nutrition;
    //         const lowerBound = breakfastCals - 100;
    //         const upperBound = breakfastCals + 100;
    //         return calories >= lowerBound && calories <= upperBound;
    //     });
    // };

    // useEffect(() => {
    //     const fetchRecipes = async () => {
    //         //breakfast
    //         try {
    //             const randomRecipeStart = Math.floor(Math.random() * 100);
    //             const breakfastRecipes = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=10&tags=meal,breakfast`;

    //             const breakfastResponse = await fetch(breakfastRecipes, {
    //                 headers: {
    //                     'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
    //                     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //                 }
    //             });
    //             const breakfastData = await breakfastResponse.json();
    //             console.log(breakfastData);
    //             const suitableBreakfastRecipe = findSuitableBreakfastRecipe(breakfastData.results, calorieGoal);
    //             if (suitableBreakfastRecipe) {
    //                 console.log("This is the recipe:", suitableBreakfastRecipe);
    //                 setBreakfastRecipes(suitableBreakfastRecipe);
    //             } else {
    //                 console.log("No suitable breakfast recipe found.");
    //             }
    //             console.log(suitableBreakfastRecipe);
    //         } catch (error) {
    //             console.error('Error fetching data: ', error);
    //         }
    //         // lunch call
    //         try {
    //             const randomRecipeStart = Math.floor(Math.random() * 100);
    //             const lunchRecipes = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=10&tags=meal,lunch`;

    //             const lunchResponse = await fetch(lunchRecipes, {
    //                 headers: {
    //                     // 'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
    //                     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //                 }
    //             });
    //             const lunchData = await lunchResponse.json();
    //             setBreakfastRecipes(lunchData);
    //             console.log(lunchData);
    //         } catch (error) {
    //             console.error('Error fetching data: ', error);
    //         }
    //         //dinner
    //         try {
    //             const randomRecipeStart = Math.floor(Math.random() * 100);
    //             const dinnerRecipes = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=10&tags=meal,dinner`;

    //             const dinnerResponse = await fetch(dinnerRecipes, {
    //                 headers: {
    //                     // 'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
    //                     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //                 }
    //             });
    //             const dinnerData = await dinnerResponse.json();
    //             setBreakfastRecipes(dinnerData);
    //             console.log(dinnerData);
    //         } catch (error) {
    //             console.error('Error fetching data: ', error);
    //         }
    //     };

    //     fetchRecipes();
    // }, []);
      

    return(
        <Container className='mt-4'>
            <Row style={{ justifyContent: 'center' }}>
                <MealPlanForm onFormSubmit={handleFormSubmit} />
            </Row>
        </Container>
    );
}