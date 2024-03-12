import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Counttry = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3
    }= country;

    const [Visited, setVisited] =useState(false);

    const handleVisited =() =>{
        setVisited(!Visited);
    }
    const passWithParams= () =>handleVisitedCountry(country);
    
    return (
        <div className={`country ${Visited ?'visited': 'non-visited'}`}>
            <h3 style={{color:Visited ? 'Purple': 'white'}}>{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>Code:{cca3} </small></p>
            <button onClick={() =>handleVisitedCountry(country)} >Mark visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Flag</button>
            <button onClick={handleVisited} >{ Visited ? 'visited': 'Going'}</button>
            {Visited ? 'I have visited this country.': 'I want to visited.'}
            <hr />
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Counttry;