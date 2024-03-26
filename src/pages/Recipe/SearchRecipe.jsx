
import { Container, Row} from 'react-bootstrap';
// import {useState, useEffect} from 'react'
// import React from 'react';

import { SearchBar } from '../../components/Recipes_Page_Components/Search_Bar';

export function SearchRecipes() {

    return (

        <Container className='mt-4'>
            <Row>
                <SearchBar/>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <h4>Search Results: </h4>
            </Row>
            
        </Container>

    )
}
