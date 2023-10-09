import { useLoaderData } from "react-router-dom";

import OurClint from "./OurClint";
import Services from "./Services";
import Slider from "./Slider";
import Team from "./Team";


const Home = () => {

    const data = useLoaderData()
    return (
        <div>
            
            <Slider></Slider>
            <Services data={data}></Services>
            <Team></Team>
            <OurClint></OurClint>
            
        </div>
    );
};

export default Home;