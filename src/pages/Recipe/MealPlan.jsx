import { Container, Row } from 'react-bootstrap';
import {useState, useEffect} from 'react'
import { MealPlanForm } from '../../components/Recipes_Page_Components/MealPlanForm.jsx';

export function MealPlanPage(){
    const [calorieGoal, setCalorieGoal] = useState('');
    const [dietaryRestriction, setDietaryRestriction] = useState('');
    const [amountOfMeals, setAmountOfMeals] = useState(0);
    const [recipes, setRecipes] = useState([]);

    const handleFormSubmit = (formData) => {
        // Receive data and split into consts
        console.log('Form received in MealPlanPage:', formData);
        const { dietaryRestriction, calorieGoal } = formData;
        console.log('Dietary Restriction:', dietaryRestriction);
        console.log('Calorie Goal:', calorieGoal);      

        calculateAmountOfMeals(calorieGoal);
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
            try {
                const dailyRecipeUrl = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=meal,breakfast';

                const response = await fetch(dailyRecipeUrl, {
                    headers: {
                        'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
                        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
                    }
                });
                const data = await response.json();
                setRecipes(data);
                console.log(data);
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