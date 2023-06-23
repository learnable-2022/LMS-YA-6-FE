import { FaSearch } from 'react-icons/fa';
// import FilterBtn from './FilterBtn';

const Filter = () => {
  return (
    <div className='relative w-fit md:px-6 lg:px-0 lg:flex'>
      <form className='flex'>
        <input
          type='text'
          placeholder='Search Courses'
          className='w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500'
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

      {/* <div className='hidden md:flex mt-4 lg:mt-0 lg:ml-10 md:space-x-4 bg-white h-fit p-1 md:w-fit rounded-md shadow-md'>
        <div className='p-1'>
            <FilterBtn filterName={'Category'} position={'left-1 md:left-0 md:right-0'} />
        </div>
        <div  className='p-1'>
            <FilterBtn filterName={'Rating'} position={'left-20 md:left-0 md:right-0'} />
        </div>
        <div className='p-1'>
            <FilterBtn filterName={'Level'} position={'left-36 md:left-0 md:right-0'} />
        </div>
        <div className='p-1'>
            <FilterBtn filterName={'Price'} position={'right-5 md:right-0 md:right-0'} />
        </div>
      </div> */}

      {/* small devices
      <div className='flex mt-4 md:mt-0 md:ml-10 md:space-x-4 bg-white h-fit p-1 w-screen overflow-x-auto md:hidden rounded-md shadow-md'>
        <div className='p-1'>
            <FilterBtn filterName={'Category'} position={'left-1 md:left-0 md:right-0'} />
        </div>
        <div  className='p-1'>
            <FilterBtn filterName={'Rating'} position={'left-20 md:left-0 md:right-0'} />
        </div>
        <div className='p-1'>
            <FilterBtn filterName={'Level'} position={'left-36 md:left-0 md:right-0'} />
        </div>
        <div className='p-1'>
            <FilterBtn filterName={'Price'} position={'right-5 md:right-0 md:right-0'} />
        </div>
      </div> */}
    </div>
  );
};

export default Filter;
