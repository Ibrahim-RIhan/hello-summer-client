import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useUsers from "../../../hooks/useUsers";

// import required modules

const PopularInstructor = () => {
  const [users] = useUsers();
  const instructors = users.filter((item) => item.role === "Instructor");
  console.log(instructors);
  const popularInstructors = instructors.filter(
    (item) => item.category === "Popular"
  );
  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-stone-800  text-5xl text-center font-bold my-20">
        Our Popular Instructors
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {popularInstructors.map((instructor) => (
          <SwiperSlide key={instructor._id}>
            <div className="mr-4">
              <div className="card w-full bg-stone-800 text-white shadow-xl">
                <div className="card-body text-center">
                  <h2 className=" card-title">{instructor.name}</h2>
                  <p className="badge badge-outline badge-accent ">
                    {instructor.category}
                  </p>
                </div>
                <figure>
                  <img src={instructor.photo} alt="Shoes" />
                </figure>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default PopularInstructor;
