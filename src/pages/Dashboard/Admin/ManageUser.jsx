
import { RiAdminLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useEffect, useState } from "react";

const ManageUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users',{})
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
  
      const handleMakeAdmin = user =>{
        console.log(user);
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
                <p>{users.length}</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin
                                </th>
                                <th>
                                    Instructor
                                </th>
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
                                        <RiAdminLine onClick={() => handleMakeAdmin(user)}></RiAdminLine>
                                        <MdVerifiedUser></MdVerifiedUser>
                                    </td>
                                    <td>
                                        <FaChalkboardTeacher onClick={() => handleMakeInstructor(user)}></FaChalkboardTeacher>
                                        <MdVerifiedUser></MdVerifiedUser>
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