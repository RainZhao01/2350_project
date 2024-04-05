import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';

export function RecipeTemplatePage(props) {
    let name = props.name;
    let description = props.description;
    let hours = props.hours;
    let minutes = props.minutes;
    let positiveRating = props.positiveRating;
    let negativeRating = props.negativeRating;
    let sections = props.sections;
    let instructions = props.instructions;

    const ingredientsList = [];

    sections.forEach(section => {
        section.components.forEach(component => {
            const ingredientName = component.ingredient.display_singular;
    
            const measurements = component.measurements.map(measurement => {
                return {
                    quantity: measurement.quantity,
                    unit: measurement.unit.display_singular 
                };
            });

            ingredientsList.push({ ingredient: ingredientName, measurements });
        });
    });
    return (
        <Card className='template' style={{ width: '70rem' }}>
        <h1>Recipe: {name}</h1>
        <p>Description: {description}</p>
        <p>Time: {hours} hours {minutes} minutes</p>
        <p>Rating Positive: {positiveRating} Negative: {negativeRating}</p>
        <h2>Ingredients:</h2>
        <ul>
            {ingredientsList.map((ingredient, index) => (
                <li key={index}>
                    {ingredient.ingredient} - {ingredient.measurements.map((measurement, index) => (
                        <span key={index}>{measurement.quantity} {measurement.unit}</span>
                    ))}
                </li>
            ))}
        </ul>
        <h2>Instructions:</h2>
        <ul>
            {instructions.map(instruction => (
                <li key={instruction.id}>{instruction.display_text}</li>
            ))}
        </ul>
        
    </Card>
    )

}

RecipeTemplatePage.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    positiveRating: PropTypes.string.isRequired,
    negativeRating: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired, // could be array or string
    instructions: PropTypes.array.isRequired,
    sections: PropTypes.array.isRequired
};
// pulled out tags like this, so its a dictionary in an array
/* const tagsToString = (tags) => {
    let tagArray = tags[0].display_name;
    for(let i  = 1; i < tags.length; i++){
        tagArray += ", " + tags[i].display_name;
    }
    return tagArray;
*/ 