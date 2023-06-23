import { FaUser } from 'react-icons/fa';
import { enrollToCourse } from '../../../api';

const NewCourseCard = ({ id, title, author, image }) => {
  const handleEnroll = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await enrollToCourse(id, config);

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='h-fit mb-3 w-48 md:w-56 rounded-md shadow-md bg-white space-y-1'>
      <div className='w-fit h-fit relative'>
        <img src={image} alt='course' className='rounded-t-md w-full' />
      </div>
      <div className='p-2 space-y-3'>
        <p className='font-semibold text-sm'>{title}</p>

        <div className='flex items-center justify-between max-w-full min-h-fit'>
          <div className='flex justify-center items-center gap-2 font-semibold'>
            <FaUser />
            <p className='font-medium text-sm'>{author}</p>
          </div>
          <div className='bg-orange-600 text-white text-sm w-fit py-2 px-4  rounded-md cursor-pointer'>
            Enroll
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourseCard;
