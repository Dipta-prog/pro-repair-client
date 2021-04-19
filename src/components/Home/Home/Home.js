import React from 'react';
import Services from '../Services/Services';
import Header from '../Header/Header';
import FeaturedService from '../FeaturedService/FeaturedService';
import Reviews from '../Reviews/Reviews';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Footer from '../../Shared/Footer/Footer';
import SlideBusinessInfo from '../../SlideBusinessInfo/SlideBusinessInfo';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <FeaturedService></FeaturedService>
            <Services></Services>
            <SlideBusinessInfo></SlideBusinessInfo>
            <BusinessInfo></BusinessInfo>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>

    );
};

export default Home;