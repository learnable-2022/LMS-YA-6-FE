import { Route, Routes, useNavigate } from "react-router-dom";
import NewCourse from "./NewCourse";
import { FaPencilAlt } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';


const Uploads = () => {
    const navigate = useNavigate()
    const handleCreateNotes = ()=>{
        navigate('/instructor/courses/create-course')
    }
    const handleCreateVideo = ()=>{
        navigate('/instructor/courses/create-course')
    }
    return ( 
        <>
            <div className="px-20 py-5 flex space-x-8">
                <div className="cursor-pointer hover:bg-orange-600 hover:text-white w-fit p-3 space-x-4 h-20 border-2 border-gray-600/60 rounded-md flex justify-around items-center"
                    onClick={handleCreateNotes}
                >
                    <div>
                        <FaPencilAlt className="text-lg" />
                    </div>
                    <div className="h-full flex flex-col justify-center space-y-3">
                        <h1 className="font-semibold">
                            Add new course
                        </h1>
                        <p>
                            Upload new course contents
                        </p>
                    </div>
                    <div>
                        <AiOutlinePlus className="text-lg" />
                    </div>
                </div>

                <div className=" cursor-pointer hover:bg-orange-600 hover:text-white w-fit p-3 space-x-4 h-20 border-2 border-gray-600/60 rounded-md flex justify-around items-center"
                    onClick={handleCreateVideo}
                >
                    <div>
                        <FaPencilAlt className="text-lg" />
                    </div>
                    <div className="h-full flex flex-col justify-center space-y-3">
                        <h1 className="font-semibold">
                            Add new video
                        </h1>
                        <p>
                            Upload new course video
                        </p>
                    </div>
                    <div>
                        <AiOutlinePlus className="text-lg" />
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Uploads;