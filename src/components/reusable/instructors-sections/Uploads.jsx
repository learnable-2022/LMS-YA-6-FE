import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import CreatedCourse from './CreatedCourse';
import * as api from '../../../api';

const Uploads = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState('drafted');
  const [courseDetailsList, setCourseDetailsList] = useState([]);
  const [createCourse, setCreateCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [showIcons, setShowIcons] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImagePath(e.target.value);
    setImage(e.target.files[0]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (selectedCourse) {
  //     const updatedCourse = {
  //       ...selectedCourse,
  //       title: title,
  //       content: description,
  //     };

  //     const updatedList = [...courseDetailsList];
  //     updatedList[selectedCourseIndex] = updatedCourse;

  //     setCourseDetailsList(updatedList);
  //     setSelectedCourse(null);
  //     setSelectedCourseIndex(null);
  //   } else {
  //     const newCourseDetails = {
  //       title: title,
  //       content: description,
  //     };
  //     setCourseDetailsList([...courseDetailsList, newCourseDetails]);
  //   }

  //   setTitle('');
  //   setDescription('');
  //   setCreateCourse(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('status', status);

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await api.createCourse(formData, config);

      console.log(data);
      setTitle('');
      setDescription('');
      setImagePath('');
      setImage(null);
      setStatus('');
    } catch (error) {
      console.log(error);
    }
    setCreateCourse(false);
  };

  const handleCreateNotes = () => {
    setSelectedCourse(null);
    setCreateCourse(true);
  };

  const handleCreateVideo = () => {
    setSelectedCourse(null);
    setCreateCourse(true);
  };

  const handleCourseClick = (index) => {
    const selectedCourseDetails = courseDetailsList[index];
    setTitle(selectedCourseDetails.title);
    setDescription(selectedCourseDetails.content);
    setSelectedCourse(selectedCourseDetails);
    setSelectedCourseIndex(index);
    setCreateCourse(true);
  };

  const handleDeleteCourse = (index) => {
    const updatedList = [...courseDetailsList];
    updatedList.splice(index, 1);
    setCourseDetailsList(updatedList);
    setShowIcons(null); // Reset the showIcons state after deletion
  };

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
    <div className='p-4 lg:px-20 lg:py-5'>
      <div className='flex space-x-8'>
        {/* Add new course */}
        <div
          className='cursor-pointer hover:bg-orange-600 hover:text-white w-fit p-4 space-x-4 border-2 border-gray-600/60 rounded-md flex items-center'
          onClick={handleCreateNotes}
        >
          {/* <div>
            <FaPencilAlt className='text-lg' />
          </div> */}
          <div className='h-full flex flex-col justify-center space-y-3'>
            <h1 className='font-semibold'>Add new course</h1>
            {/* <p>Upload new course contents</p> */}
          </div>
          <div>
            <AiOutlinePlus className='text-lg' />
          </div>
        </div>

        {/* Add new video */}
        {/* <div
          className='cursor-pointer hover:bg-orange-600 hover:text-white w-fit p-3 space-x-4 h-20 border-2 border-gray-600/60 rounded-md flex justify-around items-center'
          onClick={handleCreateVideo}
        >
          <div>
            <FaPencilAlt className='text-lg' />
          </div>
          <div className='h-full flex flex-col justify-center space-y-3'>
            <h1 className='font-semibold'>Add new video</h1>
            <p>Upload new course video</p>
          </div>
          <div>
            <AiOutlinePlus className='text-lg' />
          </div>
        </div> */}
      </div>

      {createCourse && (
        <div className='mt-5 space-y-3 h-fit max-w-5xl'>
          <h1 className='text-lg font-bold'>Add new course</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3 items-center space-y-2'>
              <label className='text-sm font-medium text-gray-900'>Title</label>
              <input
                type='text'
                className='text-sm bg-gray-50 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className='mb-4'>
              <div className='mb-3 items-center space-y-2 w-full'>
                <label className='text-sm font-medium text-gray-900'>Image</label>
                <input
                  type='file'
                  className='text-sm bg-gray-50 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                  value={imagePath}
                  onChange={handleImageChange}
                />
              </div>
              <div className='mb-3 items-center space-y-2'>
                <label className='text-sm font-medium text-gray-900'>Description</label>
                <ReactQuill
                  theme='snow'
                  value={description}
                  onChange={setDescription}
                  modules={modules}
                  className='max-w-full h-30'
                />
              </div>
              <div className='mb-3'>
                <label className='block mb-2 text-sm font-medium text-gray-900'>Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option value='drafted' defaultValue={'drafted'}>
                    Drafted
                  </option>
                  <option value='published'>Published</option>
                </select>
              </div>
            </div>

            <button
              type='submit'
              className='bg-orange-600 w-36 text-white rounded-md p-2 h-fit flex justify-center items-center'
            >
              Save
            </button>
          </form>
        </div>
      )}

      <div className='grid mt-10 grid-cols-4 gap-4'>
        {courseDetailsList.map((courseDetails, index) => (
          <div
            key={index}
            className='relative'
            onMouseEnter={() => setShowIcons(index)}
            onMouseLeave={() => setShowIcons(null)}
          >
            {showIcons === index && (
              <div className='absolute -top-2 space-x-8 right-0 m-2 flex'>
                <FaTrash
                  className='text-red-600 cursor-pointer'
                  onClick={() => handleDeleteCourse(index)}
                />
                <FaPencilAlt
                  className='text-blue-600 cursor-pointer ml-2'
                  onClick={() => handleCourseClick(index)}
                />
              </div>
            )}
            <CreatedCourse courseName={courseDetails.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uploads;
