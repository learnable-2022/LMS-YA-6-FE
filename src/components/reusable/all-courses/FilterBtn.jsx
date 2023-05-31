import { IoIosArrowDown } from 'react-icons/io';
import { useState, useEffect, useRef } from 'react';

const FilterBtn = ({filterName, position}) => {
    const [isFiltered, setIsFiltered] = useState(false);
    const filterRef = useRef();
  
    const handleFilter = () => {
      setIsFiltered(!isFiltered);
    };
  
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFiltered(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('click', handleClickOutside);
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, []);
    return ( 
        <div className="md:relative inline-block" ref={filterRef}>
            <button
            type="button"
            className="flex items-center bg-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none"
            onClick={handleFilter}
            >
            {filterName}
            <IoIosArrowDown className='mx-2' />
            </button>
            <div
            className={`${
                isFiltered ? 'block' : 'hidden'
            } absolute ${position} mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10  animate-fadeIn`}
            >
            <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                Filter 1
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                Filter 2
            </a>
            <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                Filter 3
            </a>
            </div>
        </div>
     );
}
 
export default FilterBtn;