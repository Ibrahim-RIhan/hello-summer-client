import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton, } from "react-awesome-button";
import axios from "axios";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext)
    const status ="Pending"
    const enrolled = 0;
    const feedback = "No Feedback"
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const {className,classImage,instructorName,instructorEmail,seats,price} = data
        const newItem = {className,classImage,instructorName,instructorEmail,seats,price : parseFloat(price),status,enrolled, feedback}
        axios.post('http://localhost:5000/classes', newItem )
        .then((data)=>{
            if(data.data.acknowledged){
                Swal.fire('Class Added Successfully')
                reset();
            }
        })
    }

    return (
        <div className="bg-red-400 p-20 rounded-lg">
            <h1 className="text-center font-bold text-3xl mb-5 text-stone-800">Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center gap-20 my-5">
                    <input type="text" placeholder="Class Name" {...register("className", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    {errors.className?.type === 'required' && <p>Class Name is required</p>}
                    <input type="text" placeholder="Class Image" {...register("classImage", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    {errors.classImage?.type === 'required' && <p>Class Image is required</p>}
                </div>
                <div className="flex justify-between items-center gap-20 my-5">
                    <input type="text" defaultValue={user.displayName} readOnly placeholder="instructorName" {...register("instructorName", { required: true })} className="input input-bordered input-success w-full max-w-xs" />

                    <input type="text" defaultValue={user.email} readOnly placeholder="Instructor Email" {...register("instructorEmail", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className="flex justify-between items-center gap-20 my-5">
                    <input type="text" placeholder="Available Seats" {...register("seats", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    {errors.seats?.type === 'required' && <p>Please Provide Available Seats</p>}
                    <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    {errors.price?.type === 'required' && <p>Please Provide Price</p>}
                </div>
            <AwesomeButton type="primary" className="flex justify-center">Add Class</AwesomeButton>

            </form>
        </div>
    );
};

export default AddClass;