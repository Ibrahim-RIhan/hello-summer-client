
import { RiAdminLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";

const ManageUser = () => {
    const [users] = useUsers();

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }

    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((user, index) => <tr
                                key={user?._id}
                            >
                                <th>{index + 1}</th>
                                <td><img className="w-10 h-10" src={user?.photo} alt="" /></td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {
                                        user?.role == "admin" ? <MdVerifiedUser className="text-2xl"></MdVerifiedUser> :
                                            <RiAdminLine className="text-2xl" onClick={() => handleMakeAdmin(user)}></RiAdminLine>
                                    }

                                </td>
                                <td>
                                    {
                                        user?.role == "instructor" ? <MdVerifiedUser className="text-2xl"></MdVerifiedUser> :
                                            <FaChalkboardTeacher className="text-2xl" onClick={() => handleMakeInstructor(user)}></FaChalkboardTeacher>
                                    }



                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;