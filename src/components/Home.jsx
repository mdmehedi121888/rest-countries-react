import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Lottie from "lottie-react";
import programmer from "../assets/progarmmer.json";
import programmer2 from "../assets/programmer2.json";

const Home = () => {
    return (
        <div className='flex '>
            <div className='w-[50%]'><Lottie animationData={programmer} loop={true} /></div>
            <div className='w-[50%]'><Lottie animationData={programmer2} loop={true} /></div>
        </div>
    );
};

export default Home;