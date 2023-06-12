import { CardElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import {AuthContext} from '../../../providers/AuthProvider/AuthProvider'
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
const CheckoutForm = ({ price ,classId }) => {
    const stripe = useStripe();
    const elements = useElements()
    const{user} =useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const finalPrice = parseFloat(price)
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers :{
                'content-type': 'application/json'
            },
            body : JSON.stringify(finalPrice)

         })
            .then(response => {
                console.log("payment complete", response.data.clientSecret);
                setClientSecret(response.data.clientSecret);
            })
    }, [finalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('')
            console.log(paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error : confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email : user?.email|| 'anonymous'
                    },
                },
            },
        );
        if(confirmError){
            console.log(confirmError.message);
            setCardError(confirmError.message)
        }

console.log(paymentIntent);
setProcessing(false)
if(paymentIntent.status=== 'succeeded'){
   setTransactionId(paymentIntent.id)
const payment = {email: user.email, transactionId : paymentIntent.id , finalPrice , classId }
console.log(payment);
axios.post('http://localhost:5000/payments' ,payment)
.then(res => {
    console.log(res.data);
    if(res.data.insertedId){
        Swal.alert('Payment Successful')
    }
})


}

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-primary'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 ml-8'>{cardError}</p>}
            {transactionId && <p className='text-success'>Transiction Complete with transiction id </p>}
        </div>
    );
};

export default CheckoutForm;