import HeroImg from "../../../assets/LMS-Hero.svg"
import Main from "./Main";

const Hero = () => {
    return ( 
        <div className="lg:mx-10 w-full overflow-x-hidden">
            <div className="overflow-x-hidden w-full  h-fit py-3 md:py-0 px-3 md:mt-10 mb-10  bg-slate-300 rounded-sm md:flex justify-between items-center">
            <img src={HeroImg} alt="hero-img" className="md:w-1/3" />
            <div className="flex flex-col md:w-3/5 ">
                <h1 className="mb-5 font-bold text-4xl">
                    Learning Made Easy!
                </h1>
                <p className="mb-5 md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor 
                </p>
                <div className="md:flex space-y-3 md:space-y-0">
                    <div className="px-3 cursor-pointer bg-white rounded-lg md:w-1/4 min-w-fit h-10 flex justify-center items-center">View All Courses</div>
                    <div className="px-3 cursor-pointer bg-purple-900 rounded-lg text-white md:w-1/4 min-w-fit md:mx-4 h-10 flex justify-center items-center">Learn More</div>
                </div>
            </div>
        </div>

        <div className="w-full space-y-2 px-2 overflow-x-scroll">
            <h1 className="font-bold text-3xl">
                Courses
            </h1>
            <Main />
        </div>
        
        
        </div>
     );
}
 
export default Hero;