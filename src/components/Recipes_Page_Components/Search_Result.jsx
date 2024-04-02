import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import './Search_Result.css';

export function SearchResult(props) {
    let name = props.name;
    let description = props.description;
    let image = props.image;
    let tags = props.tags;
    let positiveRating = props.positiveRating;
    let negativeRating = props.negativeRating;

    return (
        <Card className='m-4' style={{ width: '100%' }}>
            <div className="row g-0">
                <div className="col-md-6">
                    <Card.Img variant="top" src={image} className="resultImage" />
                </div>
                <div className="col-md-6">
                    <Card.Body className='row g-0 '>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item>Description: {description} </ListGroup.Item>
                                <ListGroup.Item>Rating Positive: {positiveRating} Negative: {negativeRating} </ListGroup.Item>
                                <ListGroup.Item>Tags: {tags} </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        {/* Button will link to a different page containing more info on the recipe. It its current state the button does nothing */}
                        <Button variant="dark">More Details</Button>
                    </Card.Body>
                </div>
            </div>
        </Card>
    )
}

SearchResult.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    positiveRating: PropTypes.string.isRequired,
    negativeRating: PropTypes.string.isRequired,
};