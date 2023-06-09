
import useUsers from "../../../hooks/useUsers";


const ManageClasses = () => {
    // const [classes] = useClasses();
    const [users] = useUsers()
    // console.log(classes);
    return (
        <div>
            {/* {classes.length} */}
            {users.length}
            HEllo
        </div>
    );
};

export default ManageClasses;