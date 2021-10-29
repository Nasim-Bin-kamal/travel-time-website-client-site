import React from 'react';
import BestPackages from '../../components/BestPackages/BestPackages';
import CompanyStatus from '../../components/CompanyStatus/CompanyStatus';
import Reviews from '../../components/Reviews/Reviews';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <BestPackages />
            <Reviews />
            <CompanyStatus />
        </div>
    );
};

export default Home;