import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import FaqSection from "./FaqSection";



const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
          <PopularInstructor></PopularInstructor>
            <Feedback></Feedback>
            <FaqSection></FaqSection>

        </div>
    );
};

export default Home;