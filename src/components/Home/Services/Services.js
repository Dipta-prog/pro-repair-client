import React from 'react';
// import fluoride from '../../../images/fluoride.png';
// import mobile from '../../../images/Icons/smartphone.png';
// import imac from '../../../images/Icons/imac.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
// import ServiceDetail from '../ServiceDetail/ServiceDetail';

// const serviceData = [
//     {
//         name: 'Fluoride Treatment',
//         // img: fluoride
//     },
//     {
//         name: 'Cavity Filling',
//         // img: mobile
//     },
//     {
//         name: 'Teeth Whitening',
//         // img: imac
//     }
// ]

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center">
                <h2>OUR POPULAR <span className="text-success"> SERVICES</span></h2>
                {/* <h2>Services We Provide</h2> */}
            </div>
            {/* <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                        }
                    </div>
                </div>
            </div> */}
            <div className='mt-2'>
                <ServiceDetail></ServiceDetail>
            </div>
        </section>
    );
};

export default Services;