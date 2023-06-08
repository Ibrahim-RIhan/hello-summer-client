import { useLottie } from 'lottie-react';
import animationData from './ErrorPageAnimation.json'
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    const { View } = useLottie(options);
    return (
        <div style={{height:'10vh'}}>
            {View}
            <div className='flex justify-center items-center'>
            <Link to="/"><button className='btn  btn-neutral my-10'>Go to Home</button></Link>
            </div>

        </div>
    );
};

export default ErrorElement;