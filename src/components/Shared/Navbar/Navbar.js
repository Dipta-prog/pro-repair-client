import React from 'react';
import {
    Link
} from "react-router-dom";
import './Navbar.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light">
                <Link style={{ fontWeight: '800', fontSize: '30px' }} className="navbar-brand" to='/home'>PRO REPAIR</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/home'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/orders'>Orders</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            <Link style={{ fontWeight: '600' }} className="nav-link text-primary" to='/services' >Services</Link>
                        </li>
                        <li className="nav-item active mx-3">
                            {!(loggedInUser.isSignedIn) && <span type="submit"><Link class="btn btn-outline-success my-sm-0" to='/login'>Login</Link></span>}
                            {(loggedInUser.isSignedIn) && <span class="btn my-sm-0" type="submit">{loggedInUser.photoURL && <img style={{ borderRadius: "20px", width: "35%", padding: "3px" }} src={loggedInUser.photoURL} alt=""></img>} {(loggedInUser.photo === '') && <div> {loggedInUser.name}</div>}</span>}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;