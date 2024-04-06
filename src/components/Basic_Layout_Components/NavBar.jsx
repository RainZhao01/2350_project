
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
                </Container>
            </Navbar>
        </>
    );
}
