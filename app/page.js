"use client";

import Navbar from "@/components/Navbar";
import ShowCourses from "@/components/ShowCourses";
import { useEffect, useState } from "react";
import Form from "@/components/Form";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  const handleFormOpening = () => {
    setIsOpen(!isOpen);
  };

  const handleAddCourses = async (newCourse) => {
    const res = await fetch("http://localhost:8000/courses", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
    const data = await res.json();
    setCourses((courses) => [...courses, data]);
  };

  const handleDeleteCourse = async (id) => {
    await fetch(`http://localhost:8000/courses/${id}`, {
      method: "DELETE",
    });
    setCourses((courses) => courses.filter((course) => course.id !== id));
  };

  useEffect(() => {
    const getCourses = async () => {
      const coursesFromServer = await fetchCourses();
      setCourses(coursesFromServer);
    };
    getCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch("http://localhost:8000/courses");
    const data = await res.json();
    return data;
  };
  return (
    <main>
      <Navbar
        handleFormOpening={handleFormOpening}
        isOpen={isOpen}
        handleAddCourses={handleAddCourses}
      />
      <ShowCourses courses={courses} handleDeleteCourse={handleDeleteCourse} />
      <Form isOpen={isOpen} handleAddCourses={handleAddCourses} />
    </main>
  );
}
