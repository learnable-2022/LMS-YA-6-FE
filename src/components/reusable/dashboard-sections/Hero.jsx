import Main from "./Main"
import StatusCard from "./StatusCard";

const Hero = () => {
    return ( 
        <div className="lg:mx-10 w-full overflow-x-hidden">
            <h1 className="py-5 flex flex-col p-2">
                <span className="font-bold text-4xl">
                    Hello Kate
                </span>
                <span>
                    Welcome back, let’s dive right back in
                </span>
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 w-fit h-fit p-2 md:p-0 md:space-x-8">
                <div className="w-fit">
                    <StatusCard courseNumber={8} courseStatus={'Completed Courses'} iconStatus={'check'} />
                </div>
                <div className="w-fit">
                    <StatusCard courseNumber={5} courseStatus={'Course In Progress'} iconStatus={'todo'} />
                </div>
                <div className="w-fit">
                    <StatusCard courseNumber={10} courseStatus={'Study Hours This Week'} iconStatus={'studyHours'} />
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