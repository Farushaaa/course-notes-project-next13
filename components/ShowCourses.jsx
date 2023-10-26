import React, { useEffect } from "react";
import Course from "./Course";
import EmptyList from "./EmptyList";

const ShowCourses = ({ courses, handleDeleteCourse }) => {
  return (
    <div className="show_courses">
      <div className="courses_container">
        {courses.length > 0 ? (
          courses.map((course) => (
            <Course course={course} handleDeleteCourse={handleDeleteCourse} />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
};

export default ShowCourses;
