"use client";
import React, { useState } from "react";

const Form = ({ isOpen, handleAddCourses }) => {
  const [courseName, setCourseName] = useState("");
  const [courseTopic, setCourseTopic] = useState("");
  const [courseNotes, setCourseNotes] = useState("");
  function getCurrentTime() {
    let showdate = new Date();
    let displayTodaysDate =
      showdate.getDate() +
      "." +
      showdate.getMonth() +
      "." +
      showdate.getFullYear();

    return displayTodaysDate;
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!courseName || !courseTopic) {
      console.log("You did not entered course name or topic");
      return;
    }
    const dateTime = getCurrentTime();
    const newCourse = {
      courseName,
      courseTopic,
      courseNotes,
      id: Date.now(),
      time: dateTime,
    };
    console.log(newCourse);
    handleAddCourses(newCourse);
    setCourseName("");
    setCourseNotes("");
    setCourseTopic("");
  }
  return (
    <form
      action=""
      className={isOpen ? "form" : "hidden"}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter the course name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the topic name"
        value={courseTopic}
        onChange={(e) => setCourseTopic(e.target.value)}
      />
      <textarea
        value={courseNotes}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Take notes"
        onChange={(e) => setCourseNotes(e.target.value)}
      ></textarea>
      <button className="submit_btn">Submit ✅</button>
    </form>
  );
};

export default Form;
