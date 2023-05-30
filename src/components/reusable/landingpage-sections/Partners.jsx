import partners from '../../../assets/partners.svg'

const Partners = () => {
    return ( 
        <div className="px-5 md:px-24 w-full lg:flex bg-red-100 py-10 md:space-x-8">
        <div className='flex flex-col justify-center lg:w-1/2 space-y-5'>
            <h2 className='text-lg text-orange-600 font-bold w-fit'>
            One on One learnig
            </h2>
            <h1 className='text-4xl font-bold lg:w-1/2'>
            Our live Tutors
            </h1>
            <p className='w-fit'>
            Providing the best learning management system that is more concerned on 
            the way to ensure that the goals of her students is met. Our live tutors 
            ensures that the students have a better experience by communicating 
            effectively with illustrations, resources, interactions and other 
            learning materials. 
            </p>
        </div>

        <div className='mt-5 lg:mt-0 h-fit'>
            <img src={partners} alt="student" className='rounded-sm' />
        </div>
    </div>
     );
}
 
export default Partners;