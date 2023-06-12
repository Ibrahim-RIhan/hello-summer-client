import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useUsers from "../../../hooks/useUsers";



// import required modules


const PopularInstructor = () => {
    const [users] = useUsers();
    const instructors = users.filter(item => item.role === 'Instructor');
    console.log(instructors);
    const popularInstructors = instructors.filter(item => item.category === 'Popular');
    return (
        <div className="my-20">
            <h1 className="text-stone-800  text-5xl text-center font-bold my-20">Our Popular Instructors</h1>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                
                className="mySwiper"
            >
                
                    {
                        popularInstructors.map(instructor => <SwiperSlide
                            key={instructor._id}
                        >
                            <div className="mr-4">
                                <div className="card w-full bg-emerald-400 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{instructor.name}</h2>
                                        <p className="badge badge-outline ">{instructor.category}</p>
                                    </div>
                                    <figure><img src={instructor.photo} alt="Shoes" /></figure>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
             

            </Swiper>
            {/* </div> */}

        </div>
    );
};

export default PopularInstructor;