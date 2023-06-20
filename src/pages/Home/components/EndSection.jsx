const EndSection = () => {
  return (
    <section className='px-5 md:px-24 w-full lg:flex text-center lg:text-left bg-teachBg bg-no-repeat bg-cover object-cover space-y-5 md:space-y-0 py-10 lg:py-20'>
      <div className='flex flex-col justify-center lg:w-1/2 space-y-5'>
        <h1 className='text-4xl text-white font-bold lg:w-1/2 capitalize'>We only offer you the best</h1>
      </div>

      <div className='h-fit lg:w-1/2 space-y-2'>
        <p className='text-white mb-5 md:mb-6 text-md lg:text-lg font-extralight'>
          Edu_cate, learning becomes flexible and accessible from anywhere with an internet
          connection. Students can access their course materials, assignments, and resources at
          their own convenience, allowing for self-paced learning.
        </p>
        <div className='flex space-x-6 justify-center lg:justify-normal'>
          <button className='btn bg-orange-600'>Enroll Now</button>
          {/* <button className='btn-outline text-white border-white'>Sign In</button> */}
        </div>
      </div>
    </section>
  );
};

export default EndSection;
