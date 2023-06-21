import courseImg from '../../../assets/Rectangle 14.svg';
import des from '../../../assets/3D.png';
import ui from '../../../assets/UI.png';
import pm from '../../../assets/pm.png';
import ux from '../../../assets/ux.png';
import graphics from '../../../assets/graphics.png';
import hm from '../../../assets/hospitality.png';
import cyber from '../../../assets/cyber.png';
import blockchain from '../../../assets/blockchain.png';
import crypto from '../../../assets/crypto.png';
import frontend from '../../../assets/frontend.png';
import backend from '../../../assets/backend.png';
import solidity from '../../../assets/solidity.png';
import fullstack from '../../../assets/fullstack.png';
import NewCourseCard from '../../../components/reusable/dashboard-sections/NewCourseCard';

const CourseContents = () => {
  return (
    <div className=' space-y-8'>
      <div className=' space-y-2'>
        <h2 className='mt-6 font-bold text-3xl w-fit h-fit'>Design</h2>
        <div className='flex space-x-4 w-full overflow-x-auto scroll-container'>
          <div>
            <NewCourseCard courseName={'3D Animation'} courseCost={'Free'} courseImg={des} />
          </div>
          <div>
            <NewCourseCard courseName={'UX Design'} courseCost={'N 4000'} courseImg={ux} />{' '}
          </div>
          <div>
            <NewCourseCard
              courseName={'Graphics Design'}
              courseCost={'Free'}
              courseImg={graphics}
            />{' '}
          </div>
          <div>
            <NewCourseCard courseName={'UI/UX Design'} courseCost={'N 5000'} courseImg={ui} />{' '}
          </div>
          <div>
            <NewCourseCard courseName={'3D Animation'} courseCost={'Free'} courseImg={des} />{' '}
          </div>
        </div>
      </div>

      <div className=' space-y-2'>
        <h2 className='mt-6 font-bold text-3xl w-fit h-fit'>Engineering</h2>
        <div className='flex space-x-4 w-full overflow-x-auto scroll-container'>
          <div>
            <NewCourseCard
              courseName={'Frontend Engineering'}
              courseCost={'N 6000'}
              courseImg={frontend}
            />{' '}
          </div>
          <div>
            <NewCourseCard
              courseName={'Backend Engineering'}
              courseCost={'N 6000'}
              courseImg={backend}
            />{' '}
          </div>
          <div>
            <NewCourseCard
              courseName={'Blockchain Development'}
              courseCost={'N 5500'}
              courseImg={blockchain}
            />{' '}
          </div>
          <div>
            <NewCourseCard courseName={'Solidity'} courseCost={'N 5000'} courseImg={solidity} />{' '}
          </div>
          <div>
            <NewCourseCard
              courseName={'Fullstack Engineering'}
              courseCost={'N 7000'}
              courseImg={fullstack}
            />{' '}
          </div>
        </div>
      </div>

      <div className=' space-y-2'>
        <h2 className='mt-6 font-bold text-3xl w-fit h-fit'>Web3</h2>
        <div className='flex space-x-4 w-full overflow-x-auto scroll-container'>
          <div>
            <NewCourseCard courseName={'Blockchain'} courseCost={'N 6000'} courseImg={blockchain} />{' '}
          </div>
          <div>
            <NewCourseCard
              courseName={'Principles of Digital Currencies'}
              courseCost={'N 4500'}
              courseImg={crypto}
            />{' '}
          </div>
          <div>
            <NewCourseCard
              courseName={'Solidity & Smart-Contracts'}
              courseCost={'N 5000'}
              courseImg={solidity}
            />{' '}
          </div>
          <div>
            <NewCourseCard courseName={'3D Animation'} courseCost={'Free'} courseImg={des} />{' '}
          </div>
          <div>
            <NewCourseCard courseName={'3D Animation'} courseCost={'Free'} courseImg={des} />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContents;
