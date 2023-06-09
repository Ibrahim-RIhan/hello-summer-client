import useClasses from "../../hooks/useClasses";


const Classes = () => {
    const [classes] = useClasses();
    console.log(classes);
    if(classes.length ==0) {
        return <div style={{height:'80vh'}} className="flex justify-center  items-center text-red-400"><h1 className="font-semibold text-5xl">No Class</h1></div>
    }
   

        return (
            <div className="">
                
                {
                    classes.map((singleClass) =>
                        <div
                            key={singleClass._id}
                            className="card my-5 lg:card-side bg-base-100 shadow-xl">
                            <figure><img src={singleClass.classImage} alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> Course Name : {singleClass.className} </h2>
                                <p>Course Teacher : {singleClass.instructorName}</p>
                                <p>Available Seats : {singleClass.seats}</p>
                                <p>Price : {singleClass.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
 
};

export default Classes;