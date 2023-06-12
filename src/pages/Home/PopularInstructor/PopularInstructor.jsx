// import { Swiper, SwiperSlide } from "swiper";
import Swiper from "swiper";
import useUsers from "../../../hooks/useUsers";


const PopularInstructor = () => {
    const [users] = useUsers();
    const instructors = users.filter(item => item.role === 'Instructor');
    console.log(instructors);
    const popularInstructors = instructors.filter(item => item.category === 'Popular');
    return (
        <div>
            <h1 className="text-emerald-400 text-5xl text-center fond-bold my-20">Our Popular Instructors</h1>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center">
                {
                    popularInstructors.map(instructor => <div
                        key={instructor._id}
                    >
                        <div>
                            <div className="card w-96 bg-emerald-400 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p className="badge badge-outline ">{instructor.category}</p>
                                </div>
                                <figure><img src={instructor.photo} alt="Shoes" /></figure>
                            </div>
                        </div>
                    </div>)
                }
                </div>
           
        </div>
    );
};

export default PopularInstructor;