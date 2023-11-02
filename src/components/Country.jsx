import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    // console.log(country);
    const {flags} = country;
    return (
        <div className=''>
            <img className='h-64 mb-3' src={flags.png}></img>
            <Link to={`../country/${country.ccn3}`}><button className='btn btn-primary w-full'>Details</button></Link>
        </div>
    );
};

export default Country;