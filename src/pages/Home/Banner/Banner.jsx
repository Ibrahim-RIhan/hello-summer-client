import bannerImage1 from '../../../assets/images/banner/banner1.jpg'
import bannerImage2 from '../../../assets/images/banner/banner2.jpg'
import bannerImage3 from '../../../assets/images/banner/banner3.jpg'
import bannerImage4 from '../../../assets/images/banner/banner4.jpg'
import bannerImage5 from '../../../assets/images/banner/banner5.jpg'
import bannerImage6 from '../../../assets/images/banner/banner6.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Fade } from 'react-awesome-reveal'


const Banner = () => {

    return (
        <div>
            <Carousel className='text-center' autoPlay:true transitionTime="700" >
                <div className='relative'>
                    <img className="h-1/4 rounded-lg" src={bannerImage1} />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Fade delay={500} duration={1500} fraction={0} cascade direction="left" >
                                <h1 className='text-xl lg:text-5xl text-white'>Explore various kind of art and Crafts</h1>
                                <p className='text-white mt-3'>Feel Hello Summer</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="h-1/4 rounded-lg" src={bannerImage2} />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Fade delay={500} duration={1500} fraction={0} cascade direction="left" >
                                <h1 className='text-xl lg:text-5xl text-white'>Explore various kind of art and Crafts</h1>
                                <p className='text-white mt-3'>Feel Hello Summer</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="h-1/4 rounded-lg" src={bannerImage3} />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Fade delay={500} duration={1500} fraction={0} cascade direction="left" >
                                <h1 className='text-xl lg:text-5xl text-white'>Explore various kind of art and Crafts</h1>
                                <p className='text-white mt-3'>Feel Hello Summer</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="h-1/4 rounded-lg" src={bannerImage4} />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Fade delay={500} duration={1500} fraction={0} cascade direction="left" >
                                <h1 className='text-xl lg:text-5xl text-white'>Explore various kind of art and Crafts</h1>
                                <p className='text-white mt-3'>Feel Hello Summer</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="h-1/4 rounded-lg" src={bannerImage5} />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Fade delay={500} duration={1500} fraction={0} cascade direction="left" >
                                <h1 className='text-xl lg:text-5xl text-white'>Explore various kind of art and Crafts</h1>
                                <p className='text-white mt-3'>Feel Hello Summer</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className="h-1/4 rounded-lg" src={bannerImage6} />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Fade delay={500} duration={1500} fraction={0} cascade direction="left" >
                                <h1 className='text-xl lg:text-5xl text-white'>Explore various kind of art and Crafts</h1>
                                <p className='text-white mt-3'>Feel Hello Summer</p>
                            </Fade>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Banner;