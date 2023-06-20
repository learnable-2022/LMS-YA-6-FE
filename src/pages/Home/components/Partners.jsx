import partners from '../../../assets/partners.svg';

const Partners = () => {
  return (
    <div className='px-5 md:px-24 w-full lg:flex items-center justify-between bg-red-100 py-10 md:space-x-8'>
      <div className='flex flex-col justify-center text-center lg:text-left lg:w-1/2 space-y-5'>
        <h2 className='text-lg text-orange-600 font-bold lg:w-fit'>One on One learning</h2>
        <h1 className='text-3xl md:text-4xl font-bold'>Our live Tutors</h1>
        <p className='w-fit text-md lg:text-lg font-extralight'>
          Providing the best learning management system that is more concerned on the way to ensure
          that the goals of her students is met. Our live tutors ensures that the students have a
          better experience by communicating effectively with illustrations, resources, interactions
          and other learning materials.
        </p>
      </div>

      <div className='mt-5 lg:mt-0 h-fit'>
        <img src={partners} alt='student' className='rounded-sm' />
      </div>
    </div>
  );
};

export default Partners;
