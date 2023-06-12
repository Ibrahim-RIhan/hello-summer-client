import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";
import PopularInstructor from "../PopularInstructor/PopularInstructor";



const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
          <PopularInstructor></PopularInstructor>
            <Feedback></Feedback>

        </div>
    );
};

export default Home;