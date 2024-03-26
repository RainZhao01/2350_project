import { Row, Form, Col, Button, DropdownButton } from 'react-bootstrap';
// import { Dropdown } from 'react-bootstrap';
// import {useState, useEffect} from 'react'
// import React from 'react';

import './Search_Bar.css';

//will send the result of the search back to the SearchRecipe.jsx page to get the recipe results.
export function SearchBar() {

    return (
        <Form >
            <Row>
                <Col style={{ width: '100%', marginBottom: '10px', marginTop: '10px' }} >
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
            <Row xs="auto">
                {/*Need to make a Dropdown for the tags for all sections*/}
                <Col>
                    <DropdownButton variant='dark' className='Dropdown' title="Select Diffculty">
                        {/* <Dropdown.Item onClick={() => handleSelect("something")}>something</Dropdown.Item> */}
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Dietary Restriction">
                        {/* <Dropdown.Item onClick={() => handleSelect("something")}>something</Dropdown.Item> */}
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Cuisine">
                        {/* <Dropdown.Item onClick={() => handleSelect("something")}>something</Dropdown.Item> */}
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Select Meal Type">
                        {/* <Dropdown.Item onClick={() => handleSelect("something")}>something</Dropdown.Item> */}
                    </DropdownButton>
                </Col>
                <Col>
                    <DropdownButton variant='dark' className="Dropdown" title="Selete Cooking Method">
                        {/* <Dropdown.Item onClick={() => handleSelect("something")}>something</Dropdown.Item> */}
                    </DropdownButton>
                </Col>
            </Row>
        </Form>
    )
}
