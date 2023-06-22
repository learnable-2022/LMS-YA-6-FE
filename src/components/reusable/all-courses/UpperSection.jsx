import students from '../../../assets/students.png'

const UpperSection = () => {
    return ( 
        <div className="w-full h-fit">
            <div className="md:flex md:space-x-4">
                <div className="">
                    <img src={students} alt="" className="w-20 h-20 rounded-full" />
                </div>
                <div className='space-y-2'>
                    <h1 className="text-4xl font-bold">
                    <span className="text-orange-500">You </span> 
                    Can Be Whatever You Want To 
                    <span className="text-orange-500"> Be</span>
                    </h1>
                    <p>
                    Explore all our other courses, try something new
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default UpperSection;