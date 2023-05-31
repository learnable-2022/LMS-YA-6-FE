import NewCourseCard from '../dashboard-sections/NewCourseCard'

const CourseContents = () => {
    return ( 
        <div className=" space-y-8">
            <div className=" space-y-2">
                <h2 className="mt-6 font-bold text-3xl w-fit h-fit">
                    Design
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                </div>
            </div>
        
            <div className=" space-y-2">
            <h2 className="mt-6 font-bold text-3xl w-fit h-fit">
                    Engineering
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                    <div>
                    <NewCourseCard courseName={'Public Administration'} courseCost={'Free'}  />
                    </div>
                </div>
            </div>

            <div className=" space-y-2">
            <h2 className="mt-6 font-bold text-3xl w-fit h-fit">
                    Web3
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
 
export default CourseContents;