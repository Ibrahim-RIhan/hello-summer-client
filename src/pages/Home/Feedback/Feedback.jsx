import { FaRegStar, FaStar, } from "react-icons/fa";
import Rating from 'react-rating';

const Feedback = () => {
    return (
        <div className="my-32 text-center">
        <h1 className="text-5xl font-bold ">Satisfies Customer and What They Say?</h1>
        <div className="my-7">
            <Rating

                placeholderRating={4.8}
                emptySymbol={<FaRegStar></FaRegStar>}
                readonly
                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                fullSymbol={<FaStar></FaStar>}
            >
            </Rating>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 justify-center items-center">
            <div className="max-w-sm mx-auto bg-white border py-8 border-gray-200 rounded-lg shadow ">
                <img className=" flex justify-center mx-auto w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=600" alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mark Ryden</h5>
                    <Rating
                        placeholderRating={4.9}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                    <p className="mb-3 font-normal text-gray-700">Super Fast Delivery !! I am totally satisfied with ToyZone</p>
                </div>
            </div>
            <div className="max-w-sm mx-auto bg-white border py-8 border-gray-200 rounded-lg shadow ">
                <img className=" flex justify-center mx-auto w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">John Andrew</h5>
                    <Rating
                        placeholderRating={5.0}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                    <p className="mb-3 font-normal text-gray-700">Very Good Toys according to Price.I will give it five star.</p>
                </div>
            </div>
            <div className="max-w-sm mx-auto bg-white border py-8 border-gray-200 rounded-lg shadow ">
                <img className=" flex justify-center mx-auto w-28  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Masum</h5>
                    <Rating
                        placeholderRating={4.7}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        readonly
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                    <p className="mb-3 font-normal text-gray-700">I found uncommon superhero toys here on Toyzone</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Feedback;