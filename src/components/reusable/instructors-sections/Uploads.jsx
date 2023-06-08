import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import CreatedCourse from "./CreatedCourse";

const Uploads = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [courseDetailsList, setCourseDetailsList] = useState([]);
  const [createCourse, setCreateCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [showIcons, setShowIcons] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCourse) {
      const updatedCourse = {
        ...selectedCourse,
        title: title,
        content: description,
      };

      const updatedList = [...courseDetailsList];
      updatedList[selectedCourseIndex] = updatedCourse;

      setCourseDetailsList(updatedList);
      setSelectedCourse(null);
      setSelectedCourseIndex(null);
    } else {
      const newCourseDetails = {
        title: title,
        content: description,
      };
      setCourseDetailsList([...courseDetailsList, newCourseDetails]);
    }

    setTitle("");
    setDescription("");
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

  const handleCancel = () => {
    setSelectedCourse(null);
    setSelectedCourseIndex(null);
    setCreateCourse(false);
    setTitle("");
    setDescription("");
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
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="px-20 py-5">
      <div className="flex space-x-8">
        {/* Add new course */}
        <div
          className="cursor-pointer hover:bg-orange-600 hover:text-white w-fit p-3 space-x-4 h-20 border-2 border-gray-600/60 rounded-md flex justify-around items-center"
          onClick={handleCreateNotes}
        >
          <div>
            <FaPencilAlt className="text-lg" />
          </div>
          <div className="h-full flex flex-col justify-center space-y-3">
            <h1 className="font-semibold">Add new course</h1>
            <p>Upload new course contents</p>
          </div>
          <div>
            <AiOutlinePlus className="text-lg" />
          </div>
        </div>

        {/* Add new video */}
        <div
          className="cursor-pointer hover:bg-orange-600 hover:text-white w-fit p-3 space-x-4 h-20 border-2 border-gray-600/60 rounded-md flex justify-around items-center"
          onClick={handleCreateVideo}
        >
          <div>
            <FaPencilAlt className="text-lg" />
          </div>
          <div className="h-full flex flex-col justify-center space-y-3">
            <h1 className="font-semibold">Add new video</h1>
            <p>Upload new course video</p>
          </div>
          <div>
            <AiOutlinePlus className="text-lg" />
          </div>
        </div>
      </div>

      {createCourse && (
        <div className="mt-5 space-y-5 h-fit max-w-5xl">
          <h1 className="text-lg font-bold">
            {selectedCourse ? "Edit course" : "Add new course"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex mb-3 items-center space-x-2">
              <h2 className="text-xl font-semibold">Title:</h2>
              <input
                type="text"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              modules={modules}
              className="max-w-full"
            />
            <div className="flex w-full justify-between">
              <button
                type="submit"
                className="bg-orange-600 w-36 mt-14 text-white rounded-md p-2 h-fit flex justify-center items-center"
              >
                {selectedCourse ? "Update" : "Save"}
              </button>
              <button
                className="bg-gray-600/60 text-white w-36 mt-14 rounded-md p-2 h-fit flex justify-center items-center"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid mt-10 grid-cols-4 gap-4">
        {courseDetailsList.map((courseDetails, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setShowIcons(index)}
            onMouseLeave={() => setShowIcons(null)}
          >
            {showIcons === index && (
              <div className="absolute -top-2 space-x-8 right-0 m-2 flex">
                <FaTrash
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleDeleteCourse(index)}
                />
                <FaPencilAlt
                  className="text-blue-600 cursor-pointer ml-2"
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
