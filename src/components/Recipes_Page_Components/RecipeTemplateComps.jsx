import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

export function RecipeTemplatePage(props) {
    let name = props.name;
    let description = props.description;
    let hours = props.hours;
    let minutes = props.minutes;
    let image = props.image;
    let video = props.video;
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
        <Card.Body>
            <Card.Title>Recipe: {name}</Card.Title>
            <Card.Img variant="top" src={image} className="resultImage" />
            <Card.Text>Description: {description}</Card.Text>
            <Card.Text>Time: {hours} hours {minutes} minutes</Card.Text>
            <Card.Text>Rating Positive: {positiveRating} Negative: {negativeRating}</Card.Text>
            <Card.Title>Ingredients:</Card.Title>
            <ListGroup>
                {ingredientsList.map((ingredient, index) => (
                    <ListGroup.Item key={index}>
                        {ingredient.ingredient} - {ingredient.measurements.map((measurement, index) => (
                            <span key={index}>{measurement.quantity} {measurement.unit}</span>
                        ))}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Card.Title>Instructions:</Card.Title>
            <ListGroup>
                {instructions.map(instruction => (
                    <ListGroup.Item key={instruction.id}>{instruction.display_text}</ListGroup.Item>
                ))}
            </ListGroup>
            <div>
                <iframe src={video} allowFullScreen style={{ color: 'white', width:'100%' , height:'20rem'}}>
                </iframe>
            </div>
        </Card.Body>
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
    sections: PropTypes.array.isRequired,
    video: PropTypes.string.isRequired
};