import useClasses from "../../../hooks/useClasses";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [classes, refetch] = useClasses()
    const [showModal, setShowModal] = useState(false);
    const [classID, setclassID] = useState(null)
    const openModal = (c) => {
        setShowModal(true);
        setclassID(c)
    };
    const closeModal = () => {
        setShowModal(false);
    };
    const handleApprove = id => {
        axios.patch(`http://localhost:5000/classes/approve/${id}`)
            .then((response) => {
                if (response.data.modifiedCount) {
                    Swal.fire(
                        'Successfully Approved',
                        'success'
                    )
                    refetch()
                }
            })
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
    const handleFeedback = event => {
        event.preventDefault()
        const id =classID._id;
        const form = event.target;
        const feedback = form.feedback.value;
        const newFeedback = {feedback}
        axios.patch(`http://localhost:5000/classes/feedback/${id}` , newFeedback)
        .then(() =>{
           setShowModal(false)
           setclassID(null)
        })
    }



    return (
        <div>
            <p className="text-center text-2xl font-semibold text-purple-500 my-10">Current Number of Classes : {classes.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-lg">

                    <thead className="bg-emerald-500 text-base">
                        <tr className="text-center">
                            <th>#</th>
                            <th>Photo</th>
                            <th>Class Name</th>
                            <th>Course Teacher</th>
                            <th>Price </th>
                            <th>Status</th>
                            <th >Action</th>
                            <th >Feedback</th>

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
                                <td>${singleClass?.price}</td>
                                <td>{singleClass?.status}</td>
                                <td>


                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleApprove(singleClass._id)}
                                            disabled={singleClass.status === 'Approved'}
                                            className="btn btn-success  btn-sm">Approve</button>
                                        <button
                                            onClick={() => handleDeny(singleClass._id)}
                                            disabled={singleClass.status === 'Approved'}
                                            className="btn btn-error btn-sm">Deny</button>

                                    </div>

                                </td>
                                <td>
                                    <button className="btn btn-accent btn-sm" onClick={()=>openModal(singleClass)}>Feedback</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {showModal && (

                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <form onSubmit={(e) => handleFeedback(e , )} className="bg-orange-300 rounded-lg py-10  px-20">
                        <h2 className="text-xl font-bold mb-4">Feedback</h2>
                        <textarea name="feedback" className="textarea textarea-lg w-full textarea-info" placeholder="Send Feedback"></textarea>
                        <div className="my-5">
                            <button className="btn btn-sm btn-accent " onClick={closeModal}>Close</button>
                            <input className="btn ml-5 btn-success btn-sm " type="submit" value="Send Feedback" />
                        </div>
                    </form>
                </div>

            )}
        </div>
    );
};

export default ManageClasses;