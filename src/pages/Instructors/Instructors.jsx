import useUsers from "../../hooks/useUsers";


const Instructors = () => {
    const [users] = useUsers();
    const instructors = users.filter(item => item.role === 'Instructor')
    console.log(instructors);
    return (
        <div className="my-10 ">
            <h1 className="text-3xl text-center font-bold text-blue-500 my-10 ">Meet Our Instructors</h1>

            <div className="grid justify-center items-center mx-auto  grid-cols-1 md:grid-cols-3 my-20 gap-20">
                {
                    instructors.map(item => <div
                        key={item._id}
                        className="card border-2 border-blue-500 py-10 hover:border-yellow-500  bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-40 h-40 rounded-full" src={item.photo} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.name}
                            </h2>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{item.role}</div>

                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Instructors;