import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import FaqSection from "./FaqSection";



const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <FaqSection></FaqSection>

        </div>
    );
};

export default Home;