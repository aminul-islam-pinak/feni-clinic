import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specializeds from '../Specializeds/Specializeds';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Specializeds></Specializeds>
           
        </div>
    );
};

export default Home;