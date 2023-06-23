import { useEffect, useState } from 'react';
import Footer from '../Footer';
import SideNavbar from '../dashboard-sections/SideNavbar';
import Topbar from '../dashboard-sections/Topbar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const NewCourse = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    // fetchAllCourses()
    e.preventDefault();
    const courseQueryParams = new URLSearchParams({
      title: title,
      description: description,
    });
    const courseQuery = courseQueryParams.toString();
    await fetchCourses(courseQuery);
  };

  const fetchCourses = async (courseQuery) => {
    try {
      const response = await fetch(`https://edu-cate.onrender.com/api/v1/courses?${courseQuery}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setNewCourse(data);
        // navigate('/instructor/courses')
      }
    } catch (e) {
      // console.log(e);
    }
  };

  // instance of course fetch
  // const fetchAllCourses = async () => {
  //   try {
  //     const response = await fetch(`https://edu-cate.onrender.com/api/v1/courses`, {

  //       method: 'GET',
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       setNewCourse(data)
  //       // navigate('/instructor/courses')
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {}, []);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  return (
    <>
      <Topbar />
      <div className='flex h-fit min-h-screen '>
        <SideNavbar courseTitle={title} instructorsRoute={'/courses/create-course'} />
        <div className='px-10 py-5 space-y-5 h-fit max-w-5xl'>
          <h1 className='text-lg font-bold'>Add new course</h1>
          <form action='/api/v1/courses/' method='GET' onSubmit={handleSubmit}>
            <div className='flex mb-3 items-center space-x-2'>
              <label className='text-xl font-semibold'>Title:</label>
              <input
                type='text'
                className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <ReactQuill
              theme='snow'
              value={description}
              onChange={setDescription}
              modules={modules}
              className='max-w-full'
            />
            <button
              type='submit'
              className='bg-orange-600 w-36 mt-14 text-white rounded-md p-2 h-fit flex justify-center items-center'
              // onClick={() => console.log(description)}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewCourse;
