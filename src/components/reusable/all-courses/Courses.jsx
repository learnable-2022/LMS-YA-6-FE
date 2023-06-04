import CourseContents from "./CourseContents";
import Filter from "./Filter";
import UpperSection from "./UpperSection";

const Courses = ({cancelEvents}) => {
    return ( 
        <div className="lg:px-10 px-2 py-6 overflow-hidden">
            <UpperSection />
            <div className="mt-10">
            <Filter />
            <CourseContents />
            </div>
        </div>
     );
}
 
export default Courses;