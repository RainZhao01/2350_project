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

    const handleFormSubmit = (formData) => {
        // Receive data and split into consts
        console.log('Form received in MealPlanPage:', formData);
        const { dietaryRestriction, calorieGoal } = formData;
        console.log('Dietary Restriction:', dietaryRestriction);
        console.log('Calorie Goal:', calorieGoal);      

        calculateAmountOfMeals(calorieGoal);
        calculateAmountOfMeals(amountOfMeals);
    };

    const calculateAmountOfMeals = (cal) => {
        // Amount of meals means how many times I will call the API
        if (cal >= 2500) {
            setAmountOfMeals(4);
        } else {
            setAmountOfMeals(3);
        }
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            //breakfast
            try {
                const randomRecipeStart = Math.floor(Math.random() * 100);
                const breakfastRecipes = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=10&tags=meal,breakfast`;

                const breakfastResponse = await fetch(breakfastRecipes, {
                    headers: {
                        'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                });
                const breakfastData = await breakfastResponse.json();
                setBreakfastRecipes(breakfastData);
                console.log(breakfastData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            //lunch call
            try {
                const randomRecipeStart = Math.floor(Math.random() * 100);
                const lunchRecipes = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=10&tags=meal,lunch`;

                const lunchResponse = await fetch(lunchRecipes, {
                    headers: {
                        'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                });
                const lunchData = await lunchResponse.json();
                setBreakfastRecipes(lunchData);
                console.log(lunchData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            //dinner
            try {
                const randomRecipeStart = Math.floor(Math.random() * 100);
                const dinnerRecipes = `https://tasty.p.rapidapi.com/recipes/list?from=${randomRecipeStart}&size=10&tags=meal,dinner`;

                const dinnerResponse = await fetch(dinnerRecipes, {
                    headers: {
                        'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                });
                const dinnerData = await dinnerResponse.json();
                setBreakfastRecipes(dinnerData);
                console.log(dinnerData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchRecipes();
    }, []);
      

    return(
        <Container className='mt-4'>
            <Row style={{ justifyContent: 'center' }}>
                <MealPlanForm onFormSubmit={handleFormSubmit} />
            </Row>
        </Container>
    );
}