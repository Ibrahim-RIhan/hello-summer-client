import axios from "axios";
import useSelectedClass from "../../../hooks/useSelectedClass";


const MySelectedClass = () => {
    const [selectedClasses,refetch] = useSelectedClass();
   const handleDelete = c =>{
    const id = c._id;
    console.log(id);
    axios.delete(`http://localhost:5000/selectedClass/${id}`)
    .then((response) =>{
        console.log(response.data);
        refetch()
    })
   }
    return (
        <div>
            <div className="grid  md:mr-5  gap-5  justify-center items-center">
                {selectedClasses.map(item => <div
                    key={item._id}
                    className="card w-full card-bordered lg:card-side bg-base-100 shadow-x">
                    <figure><img className="w-64 rounded-lg " src={item.image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.className}</h2>
                        <p>Instructor Name : {item.instructorName}</p>
                        <div className="card-actions justify-end">
                            <div onClick={()=>handleDelete(item)} className=" btn badge-lg badge badge-error ">Delete</div>
                            <div  className=" badge-lg badge badge-accent">Enroll Now</div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MySelectedClass;