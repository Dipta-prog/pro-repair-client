import React from 'react';
import { Link } from 'react-router-dom';
// import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center header-div">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: 'white'}}>Your Device Gets a <br/> New Life Here !</h1>
                <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <Link to="/appointment" className="btn btn-success">GET APPOINTMENT</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                {/* <img src={chair} alt="" className="img-fluid"/> */}
            </div>
        </main>
    );
};

export default HeaderMain;