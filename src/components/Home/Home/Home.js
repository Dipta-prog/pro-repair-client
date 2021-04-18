import React from 'react';
import Services from '../Services/Services';
import Header from '../Header/Header';
import FeaturedService from '../FeaturedService/FeaturedService';
// import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Reviews from '../Reviews/Reviews';
// import Header from '../Header/Header';
import ServicesM from '../ServiceDetail/ServiceDetail';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
// import Blogs from '../Blogs/Blogs';
// import Doctors from '../Doctors/Doctors';
// import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import SlideBusinessInfo from '../../SlideBusinessInfo/SlideBusinessInfo';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const HomeN = () => {
    return (
        <div>
            <Header></Header>
            <FeaturedService></FeaturedService>
            {/* <ProcessPayment></ProcessPayment> */}
            <Services></Services>
            <SlideBusinessInfo></SlideBusinessInfo>
            <BusinessInfo></BusinessInfo>
            {/* <MakeAppointment></MakeAppointment> */}
            <Reviews></Reviews>
            {/* <Blogs></Blogs> */}
            {/* <Doctors></Doctors>
            <Contact></Contact>  */}
            <Footer></Footer>
        </div>
    );
};

export default HomeN;