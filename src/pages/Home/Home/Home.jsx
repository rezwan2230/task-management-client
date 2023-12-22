import { Helmet } from "react-helmet-async";
import Bannner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Task Management | Home</title>
            </Helmet>
            <Bannner></Bannner>
        </div>
    );
};

export default Home;