import useClasses from "../../../hooks/useClasses";




const ManageClasses = () => {
    const [classes] = useClasses()

    console.log(classes);
    return (
        <div>
            {classes.length}
          
        </div>
    );
};

export default ManageClasses;