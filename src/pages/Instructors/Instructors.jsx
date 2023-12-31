import useTitle from "../../hooks/useTitle";
import useUsers from "../../hooks/useUsers";


const Instructors = () => {
    useTitle("Instructors")
    const [users] = useUsers();
    const instructors = users.filter(item => item.role === 'Instructor')
    return (
        <div className="my-10 ">
            <h1 className="text-3xl text-center font-bold text-blue-500 my-10 ">Meet Our Instructors</h1>

            <div className="grid justify-center items-center mx-auto  grid-cols-1 md:grid-cols-3 my-20 gap-10">
                {
                    instructors.map(item => <div
                        key={item._id}
                        className="card card-compact border-2 border-blue-500 py-10 hover:border-yellow-500  bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-40 h-40 rounded-full" src={item.photo} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className=" text-blue-600 font-bold text-xl text-center">
                                {item.name}
                            </h2>
                            <p className="text-center text-purple-400 text-lg">{item.role}</p>
                            
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructors;