import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useSelectedClass from "../../hooks/useSelectedClass";



const Classes = () => {
    const [classes, refetch] = useClasses();
    const [selectedClasses] = useSelectedClass()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const approvedClasses = classes.filter(item => item.status === 'Approved')
    if (approvedClasses.length == 0) {
        return <div style={{ height: '80vh' }} className="flex justify-center  items-center text-red-400"><h1 className="font-semibold text-5xl">No Class</h1></div>
    }

    const handleSelectClass = Class => {
        if (user) {
            const selectedClass = { classId: Class._id, className: Class.className, image: Class.classImage, price: Class.price, email: user.email, instructorName: Class.instructorName, seats: Class.seats, }
            axios.post('http://localhost:5000/selectedClass', selectedClass)
                .then((response) => {
                    if (response.data.acknowledged) {
                        Swal.fire('Class Added to selected class Successfully')
                        refetch();
                    }
                })
        }
        else {
            navigate("/login")
        }
    }


    return (
        <div className="">

            {
                approvedClasses.map((singleClass) =>

                    <div
                        key={singleClass._id}
                        className={`card my-5 lg:card-side ${singleClass.seats == 0 ? 'bg-red-400 ' : 'bg-base-100'
                            } shadow-xl`}>
                        <figure className="flex justify-center ml-5 rounded-lg"><img className="w-64" src={singleClass.classImage} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> Course Name : {singleClass.className} </h2>
                            <p>Course Teacher : {singleClass.instructorName}</p>
                            <p>Available Seats : {singleClass.seats}</p>
                            <p>Price : {singleClass.price}</p>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => handleSelectClass(singleClass)}
                                    className={`${singleClass.seats === "0" ? "btn-disabled btn" : "btn btn-primary"}`}
                                    disabled={selectedClasses.some((item) => item.classId === singleClass._id)}
                                >
                                    {selectedClasses.some((item) => item.classId === singleClass._id) ? "Selected" : "Select"}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );

};

export default Classes;