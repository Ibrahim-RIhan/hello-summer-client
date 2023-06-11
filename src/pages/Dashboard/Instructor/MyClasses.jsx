import { useContext } from "react";
import useClasses from "../../../hooks/useClasses";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";


const MyClasses = () => {
    const [classes] = useClasses();
    const { user } = useContext(AuthContext)
    const myClasses = classes.filter(item => item.instructorEmail === user.email)

    return (
        <div className="ml-10">

            <div className="grid justify-center items-center mx-auto justify-items-center  grid-cols-1 md:grid-cols-3 my-20 gap-20">
                {
                    myClasses.map((singleClass) =>
                        <div
                            key={singleClass._id}
                            className="card w-full  bg-base-100 shadow-xl">
                            <figure><img src={singleClass?.classImage} className="w-fit h-fit
                        " /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {singleClass?.className}

                                </h2>
                                <p>Total Enrolled Student : {singleClass.enrolled}</p>
                                {
                                    singleClass.status === "Pending" && singleClass.status === "Deny" ? <></> : <><p>{singleClass.feedback}</p></>
                                }
                                <div className="card-actions justify-end items-center">
                                    <div className={singleClass.status === 'Approved' ? 'bg-green-500 text-white badge badge-outline py-3 ' : singleClass.status === 'Pending' ? "badge bg-yellow-400 text-red-500 badge-outline py-3" : singleClass.status === "Deny" ? "badge badge-outline bg-red-500 text-white py-3 " : ""}>{singleClass.status}</div>
                                    <div className="badge badge-outline">{singleClass.price}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyClasses;