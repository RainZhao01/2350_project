
import { Container, Row} from 'react-bootstrap';
import {useState} from 'react'
// import React from 'react';

import { SearchBar } from '../../components/Recipes_Page_Components/Search_Bar';

export function SearchRecipes() {
    //use apiUrl to get the recipe resuls.
    const [apiUrl, setApiUrl] = useState();
    
    const apiCall = (url) =>{
        setApiUrl(url);
    }

    return (

        <Container className='mt-4'>
            <Row>
                <SearchBar apiCall={apiCall}/>
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <h4>Search Results: </h4>
            </Row>
            
        </Container>

    )
}
