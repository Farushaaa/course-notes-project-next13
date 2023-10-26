"use client";
import React from "react";
import Link from "next/link";
const CourseDetail = async ({ params, handleDeleteCourse }) => {
  const { course } = params;
  const data = await fetch(`http://localhost:8000/courses/${course}`);
  const res = await data.json();
  return (
    <div className="show_courseDetails">
      <div className="details_container">
        <h1>{res.courseName}</h1>
        <h3>* {res.courseTopic}</h3>
        <p>- {res.courseNotes}</p>
      </div>
      {/* <div className="btn_container">
        <Link href="/">
          <button
            onClick={() => handleDeleteCourse(res.id)}
            className="delete_btn"
          >
            Delete Notes
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default CourseDetail;
