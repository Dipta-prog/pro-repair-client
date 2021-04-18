import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
        // <div className="col-md-4 text-black info-card">
        //     <div className={`d-flex justify-content-center info-container info-${info.background}`}>
        //         <div className="mr-3">
        //             <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
        //         </div>
        //         <div>
        //             <h6>{info.title}</h6>
        //             <small>{info.description}</small>
        //         </div>
        //     </div>
        // </div>

        <div className=''>
            <div class="col">
                <div className="card mb-4 shadow item" style={{ borderRadius: '10px' }}>
                    <div className="d-flex text-center" style={{ paddingTop: "20px" }}>
                        <div className="card-img-top">
                            {/* <img src="" style={{ width: '50%' }} className="card-img-top" alt="Product Img" /> */}
                            <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="d-flex text-center">
                        <div className="card-body">
                            <h6 style={{ fontWeight: '700', fontSize: '18px' }}>{info.title}</h6>
                            <br />
                            <div className="d-flex justify-content-center">
                                <p>{info.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default InfoCard;