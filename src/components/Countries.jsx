import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
    const [seeMore,setSeeMore] = useState(false);
    const countries = useLoaderData();
    return (
        
                <div className='text-center'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-[90%] mx-auto'>{countries.slice(0,seeMore ? 250:12).map(country => <Country key={country.cca3} country={country}></Country>)}</div>
               <div> <button onClick={()=>setSeeMore(!seeMore)} className='btn btn-success px-10 py-5 my-10 '>
               {seeMore ? 'SEE LESS':'SEE MORE'}
               </button></div>
                </div>
           
    );
};

export default Countries;