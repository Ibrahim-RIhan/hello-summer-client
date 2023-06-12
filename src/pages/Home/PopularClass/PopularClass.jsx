import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";
import { useEffect } from "react";
import { useState } from "react";


const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('https://hello-summer-server-opal.vercel.app/classes/descending')
            .then(res => res.json())
            .then(data => {
                setPopularClass(data);
            })
    }, [])
    console.log(popularClass);
    return (
        <div className="my-20">
            <h1 className="text-center my-20 text-5xl font-bold">Popular Class </h1>
            <Swiper
                slidesPerView={4}
                effect={"coverflow"}
                modules={EffectCoverflow}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}

                className="mySwiper"
            
            // grabCursor={true}
            // centeredSlides={true}
            // slidesPerView={"auto"}
           

         
            // className="mySwiper"
            >
                {popularClass.map(item => <SwiperSlide
                    key={item._id}
                >
                    <div className="card h-96 w-full gap-5  bg-base-100 shadow-xl image-full">
                        <figure><img src={item.classImage} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.className}</h2>
                            <p>{item.instructorName}</p>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">${item.price}</div>
                                <div className="badge badge-outline">Popular Now</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)}



            </Swiper>
            {setPopularClass.length}
        </div>
    );
};

export default PopularClass;