import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";


const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-red-400 p-20 rounded-lg">
            <h1 className="text-center font-bold text-3xl mb-5 text-stone-800">Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center gap-20 my-5">
                    <input type="text" placeholder="Class Name" {...register("className", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Class Image" {...register("classImage", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className="flex justify-between items-center gap-20 my-5">
                    <input type="text" defaultValue={user.displayName} readOnly placeholder="instructorName" {...register("Instructor Name", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" defaultValue={user.email} readOnly placeholder="Instructor Email" {...register("instructorEmail", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className="flex justify-between items-center gap-20 my-5">
                    <input type="text" placeholder="Available Seats" {...register("seats", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                    <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                </div>
            <AwesomeButton type="primary" className="flex justify-center">Add Class</AwesomeButton>

            </form>
        </div>
    );
};

export default AddClass;