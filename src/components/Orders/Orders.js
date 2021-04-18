import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';

const Orders = (props) => {
    // console.log('output of props from orders',props.hideNavbar);
    // const [hideNavbar,setHideNavbar]=useState(true);
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5092/orderedProducts?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
        setLoadingSpinner(false);
    }, []);

    // console.log(orderedProducts);
    // if(props.hideNavbar===false)setHideNavbar(false);

    return (
        <div>
            {/* <Navbar></Navbar> */}
            {
                loadingSpinner && <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            <div className='container'>
                <h3 className='mt-3 ml-3'>Previously Bought Services</h3>
                {/* <table className="container">
                    <thead>
                        <tr className="border-bottom">
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price($)</th>
                            <th>Purchase Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderedProducts.map(product => {
                                return (
                                    <tr className="border-bottom">
                                        <td><img src={product.productImg} style={{ width: '93px', height: '93px' }} alt="" /></td>
                                        <td>{product.productName}</td>
                                        <td>{product.price}</td>
                                        <td>{product.date}</td>


                                        <td>{product.serviceImg}</td>
                                        <td>{product.serviceName}</td>
                                        <td>{product.serviceDescription}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}


                <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                    {
                        orderedProducts.map(product => {
                            return (
                                <div className="col-md-4">
                                    <div class="col">
                                        <div className="card mb-4 shadow" style={{ borderRadius: '10px' }}>
                                            <div className="d-flex text-center" style={{ paddingTop: "20px" }}>
                                                <div>
                                                    <img src={product.serviceImg} style={{ width: '50%' }} className="card-img-top" alt="Product Img" />
                                                </div>
                                            </div>
                                            <div className="d-flex text-center">
                                                <div className="card-body">
                                                    <h6 style={{ fontWeight: '700', fontSize: '18px' }}>{product.serviceName}</h6>
                                                    <br />
                                                    <p>{product.serviceDescription}</p>
                                                    <div className="d-flex justify-content-start">
                                                        {/* <h5 style={{ paddingTop: '18px' }}>${price}</h5> */}
                                                        {/* <button className="button"></button> */}
                                                        <p className="btn btn-outline-success">{product.orderStatus}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div >

                {
                    orderedProducts.length === 0 && <h2 className="d-flex mt-5 justify-content-center text-primary">You have not ordered any products</h2>
                }
            </div>
        </div>
    );
};

export default Orders;