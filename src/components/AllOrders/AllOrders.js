import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-57391.herokuapp.com/allUserOrderedProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    console.log(products);
    return (
        <div>
            <h3 className="mb-2 ml-2">Order List</h3>
            <div className="card shadow">
                <table className="container">
                    <thead>
                        <tr className="border-bottom">
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Pay With</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr id={index} className="border-bottom">
                                        <td>{product.UserName}</td>
                                        <td>{product.buyerEmail}</td>
                                        <td>{product.serviceName}</td>
                                        <td>{product.paymentMethod}</td>
                                        <td>{product.orderStatus}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;