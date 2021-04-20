import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    const handleClick = () => {
        document.getElementById('services').scrollIntoView();
    }
    return (
        <main className="container-fluid">
        <div style={{ height: '600px' }} className="row d-flex align-items-center header-div">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: 'white' }}>Your Device Gets a <br /> New Life Here !</h1>
                <p className="text-white">To solve any kind of problem-related to your devices, we have all kinds of modern technologies, a highly developed lab, and skilled technicians.</p>
                <Link onClick={handleClick} className="btn btn-success">SEE SERVICES</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">

            </div>
        </div>
        </main>
    );
};

export default HeaderMain;