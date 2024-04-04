import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col} from 'react-bootstrap';

import './Trending_Recipes.css'

export function TrendingRecipe(props) {
    let name = props.name;
    let description = props.description;
    let image = props.image;
    let positiveRating = props.positiveRating;
    let negativeRating = props.negativeRating;
    return (
        <Card className='m-0' id='prCard'>
            <Row className="g-0">
                <Col className="md-6">
                    <Card.Img variant="top" src={image} id='prImage'/>
                </Col>
                <Col className="md-6">
                    <Card.Body className='row g-0 '>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item id='prDescription'>{description} </ListGroup.Item>
                                <ListGroup.Item>&#x1F44D;: { positiveRating } &#128078;: { negativeRating} </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        {/*Button will link to a different page containing more info on the recipe. It its current state the button does nothing*/}
                        <Button variant="dark">More Details</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

TrendingRecipe.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    positiveRating: PropTypes.string.isRequired,
    negativeRating: PropTypes.string.isRequired,
};