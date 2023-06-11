import useSelectedClass from "../../../hooks/useSelectedClass";


const MySelectedClass = () => {
    const [selectedClasses, refetch] = useSelectedClass();
    console.log(selectedClasses);
    return (
        <div>
            {selectedClasses.length}
        </div>
    );
};

export default MySelectedClass;