import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import {Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Search_Result.css';

export function SearchResult(props) {
    let name = props.name;
    let description = props.description;
    let image = props.image;
    let tags = props.tags;
    let positiveRating = props.positiveRating;
    let negativeRating = props.negativeRating;

    let dynamicData = props.dynamicData;

    const navigate = useNavigate();
    
    function onMoreDetailsClick(){
        console.log(dynamicData)
        navigate( '/RecipeTemplate', { state: {data:dynamicData} })             //this sends to tempComp
    }


    return (
        <Card className='m-4' style={{ width: '100%', height: "32rem" }}>
            <Row className="g-0">
                <Col xs={4}>
                    <Card.Img variant="top" src={image} className="resultImage" style={{height: '30rem',  width: "25rem"}}/>
                </Col>
                <Col xs={8}>
                    <Card.Body className='row g-0 '>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <ListGroup>
                                <ListGroup.Item className='SRItem'>Description: {description} </ListGroup.Item>
                                <ListGroup.Item className='SRItem'>Tags: {tags}</ListGroup.Item>
                                <ListGroup.Item>&#x1F44D;: {positiveRating} &#128078;: {negativeRating} </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                        {/* Button will link to a different page containing more info on the recipe. It its current state the button does nothing */}
                        <Button variant="dark" onClick={onMoreDetailsClick} >More Details</Button>
                    </Card.Body>
                </Col>
            </Row>
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
    dynamicData: PropTypes.array.isRequired,
};