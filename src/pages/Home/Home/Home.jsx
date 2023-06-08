import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Feedback from "../Feedback/Feedback";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;