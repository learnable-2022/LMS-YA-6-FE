import CourseCard from "./CourseCard";
import NewCourseCard from "./NewCourseCard";
import courseImg from '../../../assets/Rectangle 14.svg'
import des from '../../../assets/3D.png'
import ui from '../../../assets/UI.png'
import pm from '../../../assets/pm.png'
import ux from '../../../assets/ux.png'
import graphics from '../../../assets/graphics.png'
import hm from '../../../assets/hospitality.png'
import cyber from '../../../assets/cyber.png'
import blockchain from '../../../assets/blockchain.png'
import crypto from '../../../assets/crypto.png'
import frontend from '../../../assets/frontend.png'
import backend from '../../../assets/backend.png'
import solidity from '../../../assets/solidity.png'
import { useNavigate } from "react-router-dom";

const Main = () => {
    return ( 
        <div className=" space-y-8">
            <div className=" space-y-2">
                <h2 className="font-semibold text-lg w-fit h-fit">
                    In Progress
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                        <CourseCard courseImg={courseImg} courseTitle={'Public Administration'} courseStatus={'In Progress'} progressPercentage={'0%'} />
                    </div>
                    <div>
                        <CourseCard  courseImg={des} 
                        courseTitle={'3D Animation'} 
                        courseStatus={'In Progress'} progressPercentage={'50%'} />
                    </div>
                    <div>
                        <CourseCard courseImg={pm} 
                        courseTitle={'Project Management'} 
                        courseStatus={'In Progress'} progressPercentage={'30%'} />
                    </div>
                    <div>
                        <CourseCard courseImg={ui} 
                        courseTitle={'Computer Science'} 
                        courseStatus={'In Progress'} progressPercentage={'60%'} />
                    </div>
                    <div>
                        <CourseCard courseImg={blockchain} 
                        courseTitle={'Blockchain'} courseStatus={'In Progress'} progressPercentage={'0%'} />
                    </div>
                </div>
            </div>
        
            <div className=" space-y-2">
                <h2 className="font-semibold text-lg w-fit h-fit">
                    Completed
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                        <CourseCard courseTitle={'UX Design'} 
                        courseImg={ux}
                        courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Cyber Security'}
                        courseImg={cyber} 
                        courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Hospitality Management'} 
                        courseImg={hm}
                        courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'Graphics Design'} 
                        courseImg={graphics}
                        courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                    <div>
                        <CourseCard courseTitle={'UX Engineering'} 
                        courseImg={ux}
                        courseStatus={'In Progress'} progressPercentage={'100%'} />
                    </div>
                </div>
            </div>

            <div className=" space-y-2">
                <h2 className="font-semibold text-lg w-fit h-fit">
                    Suggested Courses
                </h2>
                <div className="flex space-x-4 w-full overflow-x-auto scroll-container">
                    <div>
                        <NewCourseCard 
                        courseName={'3D Animation'} 
                        courseCost={'Free'}
                        courseImg={des}
                        />
                    </div>
                    <div>
                        <NewCourseCard 
                        courseName={'UX Design'} 
                        courseCost={'Free'}
                        courseImg={ux}  
                        />
                    </div>
                    <div>
                        <NewCourseCard 
                        courseName={'Principles of Digital Currencies'} 
                        courseCost={'N 5000'}  
                        courseImg={crypto}
                        />
                    </div>
                    <div>
                        <NewCourseCard 
                        courseName={'Frontend Development'} 
                        courseCost={'N 6000'}  
                        courseImg={frontend}
                        />
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