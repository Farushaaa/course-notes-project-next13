import React from "react";
import Link from "next/link";
import Form from "./Form";

const Navbar = ({ handleFormOpening, isOpen, handleAddCourses }) => {
  return (
    <div>
      <nav className="navbar">
        <Link href="/" className="navbar_logo">
          CourseNotes 🧠
        </Link>
        <button className="navbar_button" onClick={handleFormOpening}>
          Take Notes
          <svg
            className="navbar_button_svg"
            width="18"
            height="18"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.431 2.2435L9.2745 1.3995C9.45034 1.22366 9.68883 1.12488 9.9375 1.12488C10.1862 1.12488 10.4247 1.22366 10.6005 1.3995C10.7763 1.57534 10.8751 1.81383 10.8751 2.0625C10.8751 2.31117 10.7763 2.54966 10.6005 2.7255L5.291 8.035C5.02666 8.29918 4.70068 8.49336 4.3425 8.6L3 9L3.4 7.6575C3.50664 7.29932 3.70082 6.97334 3.965 6.709L8.431 2.2435ZM8.431 2.2435L9.75 3.5625M9 7V9.375C9 9.67337 8.88147 9.95952 8.6705 10.1705C8.45952 10.3815 8.17337 10.5 7.875 10.5H2.625C2.32663 10.5 2.04048 10.3815 1.8295 10.1705C1.61853 9.95952 1.5 9.67337 1.5 9.375V4.125C1.5 3.82663 1.61853 3.54048 1.8295 3.32951C2.04048 3.11853 2.32663 3 2.625 3H5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
