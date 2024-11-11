import { useState, useEffect } from 'react';
import './Container.css';
import Country from './country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [favcountry, setfavcountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data)); // Update state with fetched data
    }, []);

    const toglecoutry = (country) => {
        setfavcountry(prevcountry => [...prevcountry, country]);
        console.log(country);
    }

    return (
        <>
            <h3>All Countries : {countries.length}</h3>

            <h5>Favorit Country: {favcountry.length} </h5>
            <ul>
                {
                    favcountry.map((country) => {
                        return <a key={country.name.common}>{country.name.common}<br></br></a>
                    })
                }
            </ul>
            <div className="countries">
                {countries.map((country) => (
                    // console.log(country),
                    <Country country={country} toglecoutry={toglecoutry}></Country>
                ))}
            </div>
        </>
    );
}
