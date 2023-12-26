import React from "react";
import Landing from "../Components/Landing";
import Highlights from "../Components/Highlights";
import Featured from "../Components/Featured";
import Discounted from "../Components/discounted";
import Explore from "../Components/Explore";

const Home = () => {

    return (
        <div>
        <Landing />
        <Highlights />
        <Featured/>
        <Discounted />
        <Explore />
        </div>
    )
}

export default Home;