import React from 'react';
import { Elements,CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCard from './SplitCard';

const stripePromise = loadStripe('pk_test_51IheoeBznXzAbbStozuAzhpgNB48TT2va3wFes01tO4rqDpPIdlCPrtLtaCQWfKBcZLej4n9P3ny38sgseZECZCM00brZu4Fn3');

const ProcessPayment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SplitCard></SplitCard>
            </Elements>
        </div>
    );
};

export default ProcessPayment;