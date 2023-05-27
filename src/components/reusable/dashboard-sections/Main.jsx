import CourseCard from "./CourseCard";
import NewCourseCard from "./NewCourseCard";

const Main = () => {
    return ( 
        <div className=" space-y-8">
            <div className=" space-y-2">
                <h2 className="font-semibold text-lg w-fit h-fit">
                    In Progress
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'50%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'50%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'50%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'50%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'50%'} />
                    </div>
                </div>
            </div>
        
            <div className=" space-y-2">
                <h2 className="font-semibold text-lg w-fit h-fit">
                    Completed
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                </div>
            </div>

            <div className=" space-y-2">
                <h2 className="font-semibold text-lg w-fit h-fit">
                    Suggested Courses
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                        <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                        <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                        <NewCourseCard courseName={'Public Administration'} courseCost={'N 5000'}  />
                    </div>
                    <div>
                        <NewCourseCard courseName={'Public Administration'} courseCost={'N 6000'}  />
                    </div>
                    <div>
                        <NewCourseCard courseName={'Public Administration'} courseCost={'N 4000'}  />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Main;