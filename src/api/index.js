import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://localhost:1337/api/v1'
  baseURL: 'https://edu-cate.onrender.com/api/v1'
});

export const getCourses = () => API.get('/courses');
export const getCourse = (id) => API.get(`/courses/${id}`);
export const enrollToCourse = (id, config) => API.patch(`/courses/${id}/enroll`, config);
export const progressodule = (courseId, moduleId, config) => API.patch(`/courses/${courseId}/modules/${moduleId}`, config);

export const loginStudent = (formData) => API.post('/auth/login', formData);
export const registerStudent = (formData) => API.post('/auth/register', formData);
export const studentProfile = () => API.get('/student/profile');

export const loginInstructor = (formData) => API.post('/instructor/login', formData);
export const registerInstructor = (formData) => API.post('/instructor/register', formData);
export const getInstructorCourses = (config) => API.get('/instructor/courses', config);
export const createCourse = (formData, config) => API.post('/instructor/courses',formData, config);
export const updateCourse = (id, formData, config) => API.patch(`/instructor/courses/${id}`,formData, config);
export const createModules = (id,formData, config) => API.post(`/instructor/courses/${id}/modules`,formData, config);
export const updateModules = (courseId, moduleId, formData, config) => API.patch(`/instructor/courses/${courseId}/modules/${moduleId}`,formData, config);


//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },

//     try {
//       const { data } = await api.loginStudent(formData,config);

//       return data;
//     } catch (error) {
//       console.log(error)
//     }
