import React, { useState } from "react";
import courseImg from '../../../assets/lecturer.png'

const CreatedCourse = ({ courseName, editable, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [newCourseName, setNewCourseName] = useState(courseName);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onUpdate(newCourseName);
    setEditing(false);
  };

  const handleCancel = () => {
    setNewCourseName(courseName);
    setEditing(false);
  };

  const handleChange = (e) => {
    setNewCourseName(e.target.value);
  };

  return (
    <div className="mt-5 w-fit">
      <div className="h-fit relative">
        <img src={courseImg} alt="course" className="rounded-md w-56" />
      </div>
      <div className="w-full flex justify-center h-fit space-y-2">
        {editing ? (
          <input
            type="text"
            value={newCourseName}
            onChange={handleChange}
            className="font-semibold w-fit h-fit border-b-2 border-gray-400 focus:outline-none focus:border-orange-500"
          />
        ) : (
          <div className="font-semibold w-fit h-fit">{courseName}</div>
        )}
      </div>
      {editable && (
        <div className="flex justify-center mt-2">
          {editing ? (
            <>
              <button
                className="bg-orange-600 text-white px-3 py-1 rounded-md mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-600 text-white px-3 py-1 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="bg-gray-600 text-white px-3 py-1 rounded-md"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CreatedCourse;
