import React from "react";
import Link from "next/link";

const HandleButtons = ({ handleDeleteCourse, course }) => {
  return (
    <div className="handleButtons">
      <button
        className="deleteBtn"
        onClick={() => handleDeleteCourse(course.id)}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6L6 2M2 2L6 6"
            stroke="black"
            stroke-width="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <Link href={`/${course.id}`}>
        <button className="editBtn">
          <svg
            width="17"
            height="17"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 6.5V9C8.5 9.26522 8.39464 9.51957 8.20711 9.70711C8.01957 9.89464 7.76522 10 7.5 10H2C1.73478 10 1.48043 9.89464 1.29289 9.70711C1.10536 9.51957 1 9.26522 1 9V3.5C1 2.95 1.45 2.5 2 2.5H4.5M7 1H10V4M4.5 6.5L9.6 1.4"
              stroke="black"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default HandleButtons;
