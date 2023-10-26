import React from "react";
import HandleButtons from "./HandleButtons";

const Course = ({ course, handleDeleteCourse }) => {
  return (
    <div className="course_box">
      <h3 className="courseName_desc">{course.courseName}</h3>
      <h4 className="courseTopic_desc">{course.courseTopic}</h4>
      <p className="courseTime_desc">{course.time}</p>
      <HandleButtons handleDeleteCourse={handleDeleteCourse} course={course} />
    </div>
  );
};

export default Course;
