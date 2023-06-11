
import useClasses from "../../../hooks/useClasses";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [classes, refetch] = useClasses()


    const handleApprove = id => {
        console.log(id);
        // axios.patch(`http://localhost:5000/classes/approve/${id}`)
        //     .then((response) => {
        //         if (response.data.modifiedCount) {
        //             Swal.fire(
        //                 'Successfully Approved',
        //                 'success'
        //             )
        //             refetch()
        //         }
        //     })
    }
    const handleDeny = id => {
        axios.patch(`http://localhost:5000/classes/deny/${id}`)
            .then((response) => {
                if (response.data.modifiedCount) {
                    Swal.fire(
                        'Successfully Denied',
                        'success'
                    )
                    refetch()
                }

            })
    }



    return (
        <div>
            <p className="text-center text-2xl font-semibold text-red-400 my-10">Current Number of Classes : {classes.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-lg">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Course Teacher</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th >Action</th>

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            classes.map((singleClass, index) => <tr
                                key={singleClass?._id}
                            >
                                <th>{index + 1}</th>
                                <td><img className="w-10 h-10" src={singleClass?.classImage} alt="" /></td>
                                <td>{singleClass?.className}</td>
                                <td>{singleClass?.instructorName}</td>
                                <td>{singleClass?.price}</td>
                                <td>{singleClass?.status}</td>
                                <td>
                                    {/* <select
                                        disabled={singleClass.status === 'Approved'}
                                        className="select select-sm select-accent w-full max-w-xs">
                                        <option disabled  >{singleClass.status}</option>
                                        
                                        <option onClick={() => handleDeny(singleClass._id)}>Deny</option>
                                        <option><button className="btn btn-primary" onClick={() => handleApprove(singleClass._id)}>Approved</button></option>
                                    </select> */}

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleDeny(singleClass._id)}
                                            disabled={singleClass.status === 'Approved'}
                                            className="btn btn-success  btn-sm">Approve</button>
                                        <button
                                            onClick={() => handleDeny(singleClass._id)}
                                            disabled={singleClass.status === 'Approved'}
                                            className="btn btn-error  btn-sm">Deny</button>
                                    </div>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;