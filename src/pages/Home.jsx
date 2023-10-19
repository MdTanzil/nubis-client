
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhatWeDo from "../components/WhatWeDo";
import BrandSection from "./BrandSection";


const Home = () => {
    return (
        <div >
            <Hero></Hero>
            {/* brand section */}
            <BrandSection></BrandSection>
            <Services></Services>
            <WhatWeDo></WhatWeDo>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;