import student from '../../../assets/learn.png'
import mute from '../../../assets/mute.svg'
import record from '../../../assets/record.svg'
import HQ from '../../../assets/hq.svg'

const LiveTutor = () => {
    return ( 
        <div className="px-5 md:px-24 mb-20 w-full md:flex">
            <div className='flex flex-col text-center lg:text-left justify-center lg:w-1/2 space-y-9 md:space-y-5'>
                <h2 className='text-lg text-orange-600 font-bold lg:w-fit'>
                One on One learning
                </h2>
                <h1 className='text-3xl md:text-4xl font-bold lg:w-1/2'>
                Live Tutoring Sessions
                </h1>
                <p className='w-fit'>
                Effective communication is our priority. We provide live sessions for 
                our students in all learning tracks to help them have a better 
                understanding in their field of study and clear their concerns through 
                Q & A live sessions and one-in-one mentorship live sessions. 
                </p>
                <div className='flex space-x-2 pr-2 items-center justify-between h-1/6'>
                    <div className=''>
                    <img src={mute} alt="mute-icon" className='h-8 flex w-full' />
                    <p>Noiseless</p>
                    </div>
                    <div>
                    <img src={record} alt="rec-icon" className='h-8 flex w-full' />
                    <p>Recording</p>
                    </div>
                    <div>
                    <img src={HQ} alt="hq-icon" className='h-8 flex w-full' />
                    <p>High Quality</p>
                    </div>
                </div>
            </div>

            <div className='hidden lg:flex justify-end'>
                <img src={student} alt="student" className='rounded-sm w-5/6 h-5/6' />
            </div>
        </div>
     );
}
 
export default LiveTutor;