
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Clock } from './Clock'

export function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='ms-1'>
                    <Navbar.Brand href="/">υγεία</Navbar.Brand>
                    <Nav className="me-auto">
                        {/*The links do not go anywhere current */}
                        <Nav.Link href="/">Healthy Recipes</Nav.Link>
                        <Nav.Link href="Workout">Exercise Assistance</Nav.Link>
                    </Nav>
                </Container>
                <Container style={{ justifyContent: 'end' }}>
                    {/*The form current does nothing nor does*/}
                    <Navbar.Text className='mx-1'><Clock/></Navbar.Text>
                    <Form inline>
                        <Row>                    
                            <Col xs="auto" >
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}
