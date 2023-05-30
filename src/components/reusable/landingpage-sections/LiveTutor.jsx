import student from '../../../assets/learn.png'
import mute from '../../../assets/mute.svg'
import record from '../../../assets/record.svg'
import HQ from '../../../assets/hq.svg'

const LiveTutor = () => {
    return ( 
        <div className="px-24 mb-20 w-full flex">
            <div className='flex flex-col justify-center w-1/2 space-y-5'>
                <h2 className='text-lg text-orange-600 font-bold w-fit'>
                One on One learnig
                </h2>
                <h1 className='text-4xl font-bold w-1/2'>
                Live Tutoring Sessions
                </h1>
                <p className='w-fit'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <div className='flex space-x-2 pr-2 items-center justify-between h-1/6'>
                    <div className=''>
                    <img src={mute} alt="mute-icon" className='h-8 flex w-full' />
                    <p>Noiseless</p>
                    </div>
                    <div>
                    <img src={record} alt="rec-icon" className='h-8 flex w-full' />
                    <p>Noiseless</p>
                    </div>
                    <div>
                    <img src={HQ} alt="hq-icon" className='h-8 flex w-full' />
                    <p>Noiseless</p>
                    </div>
                </div>
            </div>

            <div className=' h-fit'>
                <img src={student} alt="student" className='rounded-sm' />
            </div>
        </div>
     );
}
 
export default LiveTutor;