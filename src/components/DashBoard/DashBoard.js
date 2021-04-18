import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './DashBoard.css';
// import { useHistory } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
// import window from '../../all_Images/icons/grid 1.png';
// import pen from '../../all_Images/icons/edit 1.png';
// import plus from '../../all_Images/icons/plus 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faEdit, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faStripe } from '@fortawesome/free-brands-svg-icons';
import Orders from '../Orders/Orders';
import BuyService from '../BuyService/BuyService';
import WriteReview from '../WriteReview/WriteReview';
import Admin from '../Admin/Admin';

const DashBoard = () => {
    const [dataVerifyingComplete, setDataVerifyingComplete] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email);

    useEffect(() => {
        fetch('http://localhost:5092/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => {
                setIsAdmin(data);
                setDataVerifyingComplete(true);
            })
    }, []);

    console.log('isAdmin', isAdmin);

    // const [loadingSpinner, setLoadingSpinner] = useState(true);
    // const history = useHistory();
    const { id } = useParams();
    console.log(id);
    // const [selectedItem, setSelectedItem] = useState({});
    // let newDate = new Date();
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    // let year = newDate.getFullYear();
    // let todayDate = `${date}/${month}/${year}`;

    const [buyService, setBuyService] = useState(true);
    const [boughtServices, setBoughtServices] = useState(false);
    const [review, setReview] = useState(false);

    // const [addBuyProductData, setAddBuyProductData] = useState({
    //     UserName: '',
    //     accountUserName: '',
    //     email: '',
    //     orderTimeDate: '',
    //     buyerEmail: '',
    //     cardNumber: '',
    //     selectedServiceDate: '',
    //     cvc: '',
    //     paymentMethod: '',
    //     serviceName: '',
    //     serviceDescription: '',
    //     price: '',
    //     serviceImg: '',
    //     orderStatus: 'pending',
    //     quantity: '1'
    // });


    useEffect(() => {
        if (id === undefined) {
            setBuyService(false);
            setBoughtServices(true);
            setReview(false);
        }

    }, []);


    // useEffect(() => {
    //     fetch(`https://lychee-cupcake-61240.herokuapp.com/product/${id}`)
    //         .then(res => res.json())
    //         .then(data => setSelectedItem(data))
    //     setLoadingSpinner(false);

    // }, [id])


    // server post
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const tempInfo = { ...addBuyProductData };
    //     tempInfo.serviceName = selectedItem.name;
    //     tempInfo.email = loggedInUser.email;
    //     tempInfo.accountUserName = loggedInUser.name;
    //     tempInfo.orderTimeDate = todayDate;
    //     tempInfo.price = selectedItem.price;
    //     tempInfo.serviceImg = selectedItem.photo;
    //     tempInfo.serviceDescription = selectedItem.weight; /*change need for new database*/

    //     console.log('0', event.target[0].value, '1', event.target[1].value, '3', event.target[3].checked, '4', event.target[4].value, '5', event.target[5].value, '6', event.target[6].value, '7', event.target[7].value);
    //     console.log('handleCheckOut tempInfo----', tempInfo);


    //     // clear input values
    //     // event.target[0].value='';
    //     // event.target[1].value='';
    //     // event.target[3].checked= false;
    //     // event.target[4].checked= false;
    //     // event.target[5].value='';
    //     // event.target[6].value='';
    //     // event.target[7].value='';





    //     const url = 'https://lychee-cupcake-61240.herokuapp.com/addOrderedProduct';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(tempInfo)
    //     })
    //         .then(res => {
    //             console.log('server side response', res.status);
    //             if (res.status === 200) {
    //                 // history.push("/orders");
    //                 // clear input values
    //                 event.target[0].value = '';
    //                 event.target[1].value = '';
    //                 event.target[3].checked = false;
    //                 event.target[4].checked = false;
    //                 event.target[5].value = '';
    //                 event.target[6].value = '';
    //                 event.target[7].value = '';
    //             }

    //         });

    // }



    // new function dashboard
    const handleClickForBoughtServices = () => {
        setBuyService(false);
        setBoughtServices(true);
        setReview(false);
    }
    const handleClickForBuyService = () => {
        setBuyService(true);
        setBoughtServices(false);
        setReview(false);
    }
    const handleClickForReview = () => {
        setBuyService(false);
        setBoughtServices(false);
        setReview(true);
    }





    // input fields for buy product
    // const handleBlur = (event) => {
    //     if (event.target.name === 'buyer-name') {
    //         // console.log('Name:',event.target.value);
    //         const tempInfo = { ...addBuyProductData };
    //         tempInfo.UserName = (event.target.value);
    //         setAddBuyProductData(tempInfo);
    //     }
    //     if (event.target.name === 'buyer-email') {
    //         // console.log('Email:',event.target.value);
    //         const tempInfo = { ...addBuyProductData };
    //         tempInfo.buyerEmail = (event.target.value);
    //         setAddBuyProductData(tempInfo);
    //     }
    //     if (event.target.name === 'card-number') {
    //         // console.log('Card Number:',event.target.value);
    //         const tempInfo = { ...addBuyProductData };
    //         tempInfo.cardNumber = (event.target.value);
    //         setAddBuyProductData(tempInfo);
    //     }
    //     if (event.target.name === 'selected-date') {
    //         // console.log('Date:',event.target.value);
    //         const tempInfo = { ...addBuyProductData };
    //         tempInfo.selectedServiceDate = (event.target.value);
    //         setAddBuyProductData(tempInfo);
    //     }
    //     if (event.target.name === 'CVC-field') {
    //         // console.log('CVC:',event.target.value);
    //         const tempInfo = { ...addBuyProductData };
    //         tempInfo.cvc = (event.target.value);
    //         setAddBuyProductData(tempInfo);
    //     }
    // }

    // const handleChange = event => {
    //     // console.log('payment method:', event.target.id);
    //     const tempInfo = { ...addBuyProductData };
    //     tempInfo.paymentMethod = (event.target.id);
    //     setAddBuyProductData(tempInfo);
    // }

    // console.log(loggedInUser);
    // console.log(selectedItem);
    // console.log('buy product data---', addBuyProductData);

    return (
        <div>

            {!dataVerifyingComplete && <div>
                <Navbar></Navbar>
                <div className="m-5">
                    <div className="d-flex justify-content-center text-primary">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>}

            {dataVerifyingComplete && <div>
                {!isAdmin && <div>
                    <Navbar></Navbar>
                    <div className="row">
                        <div className="col-md-3 menu-div mb-5 bg-success">
                            <div className="d-flex justify-content-center">
                                <div className=" menu-container">
                                    <p id="manageProducts" onClick={handleClickForBuyService} className="row menu"> <FontAwesomeIcon className="icon" icon={faShoppingCart} /> Buy Service</p>
                                    <p id="addProducts" onClick={handleClickForBoughtServices} className="row menu"> <FontAwesomeIcon className="icon" icon={faList} /> Bought Services</p>
                                    <p id="editProducts" onClick={handleClickForReview} className="row menu"> <FontAwesomeIcon className="icon" icon={faEdit} /> Review</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-9">
                            {buyService && <div>
                                <BuyService></BuyService>
                            </div>
                            }

                            {boughtServices && <div>
                                <Orders></Orders>
                            </div>
                            }

                            {review && <div>
                                <WriteReview></WriteReview>
                            </div>
                            }
                        </div>

                    </div>
                </div>
                }

                {isAdmin && <Admin></Admin>}
            </div>}
        </div>
    );
};

export default DashBoard;