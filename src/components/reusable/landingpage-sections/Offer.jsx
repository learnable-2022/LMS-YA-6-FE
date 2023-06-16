import play from '../../../assets/play.svg';
import connect from '../../../assets/connect.svg';
import read from '../../../assets/read.svg';
import chat from '../../../assets/chat.svg';

const Offer = () => {

  const handleContactClick = () => {
    const phoneNumber = '2348168298363'; // Replace with the desired phone number
    const message = 'Hi! Welcome to Educate. Would like to lodge a complaint?'; // Replace with the desired message

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url);
  }
  return (
    <section id='About' className='px-5 md:px-14 mb-20 w-full h-fit flex flex-col items-center text-center space-y-8'>
      <div
        className='lg:w-1/2 space-y-2 flex flex-col items-center text-center'
      >
        <h3 className='font-semibold'>Quality education for you</h3>
        <h1 className='text-3xl md:text-4xl font-bold'>
          We offer Accessibility with Tons of friendly features
        </h1>
        <p className='lg:w-3/4'>
          Here are some of the interesting features and experiences powered by Edu_cate.
        </p>
      </div>

      <div className='grid lg:grid-cols-4 mb-5 gap-6'>
        <div className='flex flex-col items-center space-y-3 p-4 lg:p-6 border shadow'>
          <img src={play} alt='play-icon' className='h-16'/>
          <h2 className='font-bold text-lg'>Personalized Learning Experience</h2>
          <p className='font-extralight'>
            We help track student progress and provide targeted feedback, further enhancing the
            learning experience.
          </p>
        </div>

        <div className='flex flex-col items-center space-y-3 p-4 lg:p-6 border shadow'>
          <img src={connect} alt='play-icon' className='h-16'/>
          <h2 className='font-bold text-lg'>Decentralized Learning Platform</h2>
          <p className='font-extralight'>
            We provide a centralized location for accessing educational resources, course materials,
            and communication tools.
          </p>
        </div>

        <div className='flex flex-col items-center space-y-3 p-4 lg:p-6 border shadow'>
          <img src={read} alt='play-icon' className='h-16'/>
          <h2 className='font-bold text-lg'>Automated Assessment & Feedback</h2>
          <p className='font-extralight'>
            We help provide immediate feedback to students, helping them gauge their understanding
            and identify areas for improvement.
          </p>
        </div>

        <div className='flex flex-col items-center space-y-3 p-4 lg:p-6 border shadow'>
          <img src={chat} alt='play-icon' className='h-16'/>
          <h2 className='font-bold text-lg'>Enhanced Communication & Collaboration</h2>
          <p className='font-extralight'>
            We help fosters engagement, encourages peer-to-peer learning, and facilitates better
            student-teacher communication.
          </p>
        </div>
      </div>

      <div className='flex space-x-10'>
        <div className='p-3 bg-orange-600 text-white rounded-md'>Start Now For Free</div>
        <div className='p-4 bg-gray-200/60 rounded-md'
        
        onClick={handleContactClick}>
                    Contact Team
                    </div>
      </div>

    </section>
  );
};

export default Offer;