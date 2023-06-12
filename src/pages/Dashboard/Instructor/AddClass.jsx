import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton, } from "react-awesome-button";
import axios from "axios";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext)
    const status = "Pending"
    const enrolled = 0;
    const feedback = "No Feedback"
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const { className, classImage, instructorName, instructorEmail, seats, price } = data
        const newItem = { className, classImage, instructorName, instructorEmail, seats, price: parseFloat(price), status, enrolled, feedback }
        axios.post('http://localhost:5000/classes', newItem)
            .then((data) => {
                if (data.data.acknowledged) {
                    Swal.fire('Class Added Successfully')
                    reset();
                }
            })
    }

    return (
        <div className="bg-stone-800 p-10 rounded-lg">
            <h1 className="text-center text-white font-bold border-black text-3xl mb-10 text-stone-800">Add A Class!</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center w-full gap-5 my-5">
                    <div>
                    <input type="text" placeholder="Class Name" {...register("className", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    {errors.className?.type === 'required' && <p className="text-red-500">Class Name is required</p>}
                    </div>
                    <div>
                    <input type="text" placeholder="Class Image" {...register("classImage", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    {errors.classImage?.type === 'required' && <p  className="text-red-500">Class Image is required</p>}
                    </div>
                </div>
                <div className="flex justify-center items-center w-full gap-5  my-5">
                    <div>
                    <input type="text" defaultValue={user.displayName} readOnly placeholder="instructorName" {...register("instructorName", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                    <div>

                        <input type="text" defaultValue={user.email} readOnly placeholder="Instructor Email" {...register("instructorEmail", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full gap-5  my-5">
                    <div>
                        <input type="text" placeholder="Available Seats" {...register("seats", { required: true })} className="input input-bordered input-success w-full " />
                        {errors.seats?.type === 'required' && <p  className="text-red-500 ">Please Provide Available Seats</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered input-success w-full " />
                        {errors.price?.type === 'required' && <p  className="text-red-500">Please Provide Price</p>}
                    </div>
                </div>
                <div className="flex justify-center">
                    <AwesomeButton type="secondary"  >Add Class</AwesomeButton>
                </div>

            </form>
        </div>
    );
};

export default AddClass;