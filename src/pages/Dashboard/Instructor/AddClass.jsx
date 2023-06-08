import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";


const AddClass = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="Class Name" {...register("className", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" placeholder="Class Image" {...register("classImage", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" defaultValue={user.displayName} readOnly placeholder="instructorName" {...register("Instructor Name", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" defaultValue={user.email} readOnly placeholder="Instructor Email" {...register("instructorEmail", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" placeholder="Available Seats" {...register("seats", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
                <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered input-success w-full max-w-xs" />
      

                <input type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;