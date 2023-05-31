import Footer from "./reusable/Footer";
import Navbar from "./reusable/Navbar";
import About from "./reusable/landingpage-sections/About";
import EndSection from "./reusable/landingpage-sections/EndSection";
import HeroSection from "./reusable/landingpage-sections/HeroSection";
import LiveTutor from "./reusable/landingpage-sections/LiveTutor";
import Offer from "./reusable/landingpage-sections/Offer";
import Partners from "./reusable/landingpage-sections/Partners";
import Testimonial from "./reusable/landingpage-sections/Testimonial";

const Home = () => {
    return ( 
        <div>
            <Navbar />
            <div className="">
                <HeroSection />
                <Offer />
                <About />
                <LiveTutor />
                <Testimonial />
                <Partners />
                <EndSection />
            </div>
            <Footer />
        </div>
     );
}
 
export default Home;