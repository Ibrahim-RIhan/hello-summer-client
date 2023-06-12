import axios from "axios";
import useSelectedClass from "../../../hooks/useSelectedClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MySelectedClass = () => {
    const [selectedClasses, refetch] = useSelectedClass();
    if (selectedClasses.length == 0) {
        return <div style={{ height: '80vh' }} className="flex justify-center  items-center text-purple-500"><h1 className="font-semibold text-5xl">No Selected Class</h1></div>
    }
    const handleDelete = c => {
        const id = c._id;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`https://hello-summer-server-opal.vercel.app/selectedClass/${id}`)
                        .then(() => {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        });
                }
            })
    }
    return (
        <div className="ml-5">
            <div className="grid grid-cols-1 md:grid-cols-2 md:mr-10  gap-5  justify-center items-center">
                {selectedClasses.map(item => <div
                    key={item._id}
                    className="card card-side w-full card-bordered lg:card-side bg-base-100 shadow-x">
                    <figure><img className="w-64 rounded-lg " src={item.image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.className}</h2>
                        <p>Instructor Name : {item.instructorName}</p>
                        <p>Price : ${item.price}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(item)} className=" badge-lg badge badge-error ">Delete</button>
                            <Link to={`/dashboard/payment/${item}`} className=" badge-lg badge badge-accent">Enroll Now</Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MySelectedClass;