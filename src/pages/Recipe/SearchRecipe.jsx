
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import React from 'react';

import { SearchBar } from '../../components/Recipes_Page_Components/Search_Bar';
import { SearchResult } from '../../components/Recipes_Page_Components/Search_Result';

export function SearchRecipes() {
    //use apiUrl to get the recipe resuls.
    const [apiUrl, setApiUrl] = useState('https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&tags=meal,healthy');
    const [serachResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch(apiUrl, {
            headers: {
                'X-RapidAPI-Key': '486012e96fmsh58cbc3385b05d74p190492jsn361fa1f77c9f',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }

        })
            .then((response) => response.json())
            .then((data) => {
                setSearchResults(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            })
    }, [apiUrl]);

    const apiCall = (url) => {
        setApiUrl(url);
    }

    return (

        <Container className='mt-4'>
            <Row>
                <SearchBar apiCall={apiCall} />
            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <h4>Search Results: </h4>
            </Row>
            <Row>
                {serachResults["results"]?.map((data, index) => (
                    <React.Fragment key={index}>
                        <Row>
                            <p></p>
                            <SearchResult name={data.name} image={data.thumbnail_url} description={data.description}
                                positiveRating={data.user_ratings.count_positive} negativeRating={data.user_ratings.count_negative}
                                tags={data.tags} />
                        </Row>
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    )
}
