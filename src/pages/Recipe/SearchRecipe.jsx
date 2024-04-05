
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import React from 'react';

import { SearchBar } from '../../components/Recipes_Page_Components/Search_Bar';
import { SearchResult } from '../../components/Recipes_Page_Components/Search_Result';

export function SearchRecipes() {
    //use apiUrl to get the recipe resuls.
    const [apiUrl, setApiUrl] = useState('https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=meal,healthy');
    const [serachResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch(apiUrl, {
            headers: {
                'X-RapidAPI-Key': '99c5b37348mshcd1a26a64153451p1b2fc0jsne5ca216d0e61',
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
        console.log(url)
        setApiUrl(url);
    }

    const tagsToString = (tags) => {
        let tagArray = tags[0].display_name;
        for(let i  = 1; i < tags.length; i++){
            tagArray += ", " + tags[i].display_name;
        }
        return tagArray;
    }


    return (

        <Container className='mt-4'>
            <Row>
                <SearchBar apiCall={apiCall} />
            </Row>
            <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
                <h4>Search Results: </h4>
            </Row>
            <Row >
                {serachResults["results"]?.map((data, index) => (
                    <React.Fragment key={index}>
                        <Row>
                            <SearchResult name={data.name} image={data.thumbnail_url} description={data.description}
                                positiveRating={data.user_ratings.count_positive} negativeRating={data.user_ratings.count_negative}
                                tags={tagsToString(data.tags)} dynamicData={data} />
                        </Row>
                    </React.Fragment>
                ))}
            </Row> 

        </Container>
    )
}
