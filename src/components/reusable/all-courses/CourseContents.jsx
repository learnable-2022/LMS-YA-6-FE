import NewCourseCard from '../dashboard-sections/NewCourseCard';
import { useEffect, useState } from 'react';
import { getCourses } from '../../../api';

const CourseContents = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const { data } = await getCourses();

        console.log(data.data);
        setCourses(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCourses();
  }, []);

  return (
    <div className='mt-6 grid gap-6 md:gap-6 grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4'>
      {courses.map((course) => {
        return (
          <NewCourseCard
            key={course._id}
            id={course._id}
            title={course.title}
            image={course.image}
            author={course.author.fullname}
          />
        );
      })}
    </div>
  );
};

export default CourseContents;
