
import { RiAdminLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import Swal from "sweetalert2";

const ManageUser = () => {
    const [users, refetch] = useUsers();
    const handleMakeAdmin = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/users/admin/${user._id}`, {
                        method: 'PATCH'
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch()
                            if (data.modifiedCount) {
                                Swal.fire(
                                    'Make Admin Successful',
                                    'success'
                                )
                            }
                        })
                }
            })
    }


    const handleMakeInstructor = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/instructor/${user._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.modifiedCount) {
                            Swal.fire(
                                'Make Instructor Successful',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <p className="text-center text-2xl font-semibold text-purple-500 my-10">Total User : {users.length}</p>

            <div className="overflow-x-auto">
                <table className="table table-lg">
                    {/* head */}
                    <thead className="bg-emerald-500 text-base">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                            className="text-center"
                                key={user?._id}
                            >
                                <th className="text-center">{index + 1}</th>
                                <td  className="text-center"><img className="w-10 h-10" src={user?.photo} alt="" /></td>
                                <td  className="text-center">{user?.name}</td>
                                <td  className="text-center">{user?.email}</td>
                                <td  className="text-center">{user?.role}</td>
                                <td  className="text-center">
                                    {
                                        user?.role == "Admin" ? <MdVerifiedUser className="text-2xl"></MdVerifiedUser> :
                                            <RiAdminLine className="text-2xl" onClick={() => handleMakeAdmin(user)}></RiAdminLine>
                                    }
                                </td>
                                <td  className="text-center">
                                    {
                                        user?.role == "Instructor" ? <MdVerifiedUser className="text-2xl"></MdVerifiedUser> :
                                            <FaChalkboardTeacher className="text-2xl" onClick={() => handleMakeInstructor(user)}></FaChalkboardTeacher>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ManageUser;