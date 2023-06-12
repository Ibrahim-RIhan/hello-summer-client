import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
// eslint-disable-next-line react/prop-types
const Payment = () => {
    const { price , _id , } = useParams()
  
  


    return (
        <div className="w-full">
            <h1>Payment</h1>
            {/* To Do : porvide pk */}
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}
                classId={_id}
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;