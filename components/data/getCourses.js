'use strict';

function getCourses(coursesOfUniversity, quota) {
  let courses = [];
  for (const course of coursesOfUniversity) {
    if(course.DS_MOD_CONCORRENCIA == quota) {
      courses.push(course);
    };
  };

  return courses;
};
export default getCourses;