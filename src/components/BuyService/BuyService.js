import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faStripe } from '@fortawesome/free-brands-svg-icons';
import './BuyService.css'

const BuyService = () => {
    const [loadingSpinner, setLoadingSpinner] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState({});
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let todayDate = `${date}/${month}/${year}`;


    const [addBuyProductData, setAddBuyProductData] = useState({
        UserName: '',
        accountUserName: '',
        email: '',
        orderTimeDate: '',
        buyerEmail: '',
        cardNumber: '',
        selectedServiceDate: '',
        cvc: '',
        paymentMethod: '',
        serviceName: '',
        serviceDescription: '',
        price: '',
        serviceImg: '',
        orderStatus: 'pending',
        quantity: '1'
    });

    useEffect(() => {
        fetch(`http://localhost:5092/product/${id}`)
            .then(res => res.json())
            .then(data => setSelectedItem(data))
        setLoadingSpinner(false);

    }, [id])

    // input fields for buy product
    const handleBlur = (event) => {
        if (event.target.name === 'buyer-name') {
            // console.log('Name:',event.target.value);
            const tempInfo = { ...addBuyProductData };
            tempInfo.UserName = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
        if (event.target.name === 'buyer-email') {
            // console.log('Email:',event.target.value);
            const tempInfo = { ...addBuyProductData };
            tempInfo.buyerEmail = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
        if (event.target.name === 'card-number') {
            // console.log('Card Number:',event.target.value);
            const tempInfo = { ...addBuyProductData };
            tempInfo.cardNumber = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
        if (event.target.name === 'selected-date') {
            // console.log('Date:',event.target.value);
            const tempInfo = { ...addBuyProductData };
            tempInfo.selectedServiceDate = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
        if (event.target.name === 'CVC-field') {
            // console.log('CVC:',event.target.value);
            const tempInfo = { ...addBuyProductData };
            tempInfo.cvc = (event.target.value);
            setAddBuyProductData(tempInfo);
        }
    }

    const handleChange = event => {
        // console.log('payment method:', event.target.id);
        const tempInfo = { ...addBuyProductData };
        tempInfo.paymentMethod = (event.target.id);
        setAddBuyProductData(tempInfo);
    }


    // server post
    const handleSubmit = (event) => {
        event.preventDefault();
        const tempInfo = { ...addBuyProductData };
        tempInfo.serviceName = selectedItem.name;
        tempInfo.email = loggedInUser.email;
        tempInfo.accountUserName = loggedInUser.name;
        tempInfo.orderTimeDate = todayDate;
        tempInfo.price = selectedItem.price;
        tempInfo.serviceImg = selectedItem.photo;
        tempInfo.serviceDescription = selectedItem.description; /*change need for new database*/

        console.log('0', event.target[0].value, '1', event.target[1].value, '3', event.target[3].checked, '4', event.target[4].value, '5', event.target[5].value, '6', event.target[6].value, '7', event.target[7].value);
        console.log('handleCheckOut tempInfo----', tempInfo);


        // clear input values
        // event.target[0].value='';
        // event.target[1].value='';
        // event.target[3].checked= false;
        // event.target[4].checked= false;
        // event.target[5].value='';
        // event.target[6].value='';
        // event.target[7].value='';
        console.log('readonly btn', event.target[2].value);
        if (event.target[2].value === '') {
            console.log('inside empty product');
            alert('Without choosing a service you cannot buy any service, please select a service from "Our popular services" on home screen');
        }

        else {
            const url = 'http://localhost:5092/addOrderedProduct';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tempInfo)
            })
                .then(res => {
                    console.log('server side response', res.status);
                    if (res.status === 200) {
                        // history.push("/orders");
                        // clear input values
                        event.target[0].value = '';
                        event.target[1].value = '';
                        event.target[3].checked = false;
                        event.target[4].checked = false;
                        event.target[5].value = '';
                        event.target[6].value = '';
                        event.target[7].value = '';

                        setAddBuyProductData({
                            UserName: '',
                            accountUserName: '',
                            email: '',
                            orderTimeDate: '',
                            buyerEmail: '',
                            cardNumber: '',
                            selectedServiceDate: '',
                            cvc: '',
                            paymentMethod: '',
                            serviceName: '',
                            serviceDescription: '',
                            price: '',
                            serviceImg: '',
                            orderStatus: 'pending',
                            quantity: '1'
                        });
                    }
                });

        }

    }


    return (
        <div>
            {
                loadingSpinner && <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <h3>Buy Service</h3>
                <div className="card shadow card-width">
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="pl-3 pr-3 pt-2">
                                <h5>Add Name</h5>
                                <input required onBlur={handleBlur} className="form-control" type="text" name="buyer-name" placeholder="Enter Name" />
                            </div>
                            <div className="mt-3 pl-3 pr-3 pb-3">
                                <h5>Add Email</h5>
                                <input required onBlur={handleBlur} className="form-control" type="email" name="buyer-email" placeholder="Enter Email" />
                            </div>
                            <div className="mt-3 pl-3 pr-3 pb-3">
                                <h5>Service Name</h5>
                                <input required onBlur={handleBlur} className="form-control" type="text" name="service-name" value={selectedItem.name} readOnly placeholder="Service Name" />
                            </div>
                            <div className="mt-3 pl-3 pr-3 pb-3">
                                <h5>Pay With</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="radio" required onChange={handleChange} id="credit-card" name="paymentMethod" />
                                        <label for="credit-card"> <FontAwesomeIcon className="brand-icon" icon={faCreditCard} /> Credit Card</label><br />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="radio" required onChange={handleChange} id="Stripe" name="paymentMethod" />
                                        <label for="Stripe"> <FontAwesomeIcon className="brand-icon" icon={faStripe} /> Stripe</label><br />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 pl-3 pr-3 pb-3">
                                <h5>Add Card Number</h5>
                                <input required onBlur={handleBlur} className="form-control" type="number" name="card-number" placeholder="Enter Card Number" />
                                <div className="row mt-3 pl-3 pr-3 pb-3">
                                    <div className="col-md-6">
                                        <h5>Choose Date</h5>
                                        <input required onBlur={handleBlur} className="form-control" type="date" name="selected-date" placeholder="DD/MM/YY" />
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Enter CVC</h5>
                                        <input required onBlur={handleBlur} className="form-control" type="text" name="CVC-field" placeholder="CVC" />
                                    </div>
                                    <p className=" mt-3 pl-3 pr-3 pb-3">Your Service Charge Will be - ${selectedItem.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-3 d-flex float-right">Save</button>
            </form>

        </div>
    );
};

export default BuyService;