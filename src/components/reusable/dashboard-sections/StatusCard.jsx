import { FaCheck, FaList, FaClock } from 'react-icons/fa';

const StatusCard = ({ courseNumber, courseStatus, iconStatus }) => {
  const IconComponent = {
    check: FaCheck,
    todo: FaList,
    studyHours: FaClock,
  }[iconStatus];
  return (
    <div
      className='w-full flex overflow-hidden w-fit  h-36 md:py-0 px-3 mx-1 md:mx-3 md:mt-5 mb-8 rounded-md text-white'
      style={{ backgroundImage: 'linear-gradient(to bottom, #FC4F13, #F39C11)' }}
    >
      <h1 className='flex flex-col h-full'>
        <span className='h-3/4 flex items-end text-5xl font-bold'>{courseNumber}</span>
        <span className='flex font-semibold items-center w-40 md:w-auto h-full text-sm pr-3'>
          {courseStatus}
        </span>
      </h1>
      <div className='relative'>
        {IconComponent && (
          <IconComponent className=' text-7xl border-4 p-2 border-white rounded-lg relative  top-24 left-5' />
        )}
      </div>
    </div>
  );
};

export default StatusCard;
