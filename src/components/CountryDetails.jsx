import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const country = useLoaderData();
    console.log(country[0]);
    const{name,population,flags,region,area} = country[0];
    return (
        <div className='mx-auto flex h-[90vh] w-[100%] items-center justify-center'>
           <div className="card card-compact w-full lg:w-[50%] bg-base-100 shadow-xl">
  <figure><img src={flags.png} className=' h-96' alt="Shoes" /></figure>
  <div className="card-body text-center">
   <h1 className='text-2xl font-bold'>country name: {name.common}</h1>
   <h1 className='text-2xl font-bold'>region : {region}</h1>
   <h1 className='text-2xl font-bold'>population : {population}</h1>
   <h1 className='text-2xl font-bold'>area : {area}</h1>
   <Link to={`../countries`}><h1><button className='btn btn-success w-[50%]'>go back</button></h1></Link>
  </div>
</div>
        </div>
    );
};

export default CountryDetails;