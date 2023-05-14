import React from 'react';
import Cards from '../components/Cards';
import "../styles/Cards.css"
import { useLocation } from 'react-router-dom';

function Results() {
    const location = useLocation();

    return (
        <Cards img={location} />
    )

}

export default Results;