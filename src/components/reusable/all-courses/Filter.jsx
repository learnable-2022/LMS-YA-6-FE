import { FaSearch } from 'react-icons/fa';
// import FilterBtn from './FilterBtn';

const Filter = () => {
  return (
    <div className='relative w-fit md:px-6 lg:px-0 lg:flex'>
      <form className='flex'>
        <input
          type='text'
          placeholder='Search Courses'
          className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500'
        />
        <span className='relative inset-y-0 -right-1 flex items-center pr-3'>
          <button
            type='submit'
            className='p-2 bg-orange-500 rounded-md text-white h-full w-14 flex justify-center items-center'
          >
            <FaSearch className='h-5 w-5' />
          </button>
        </span>
      </form>
    </div>
  );
};

export default Filter;
