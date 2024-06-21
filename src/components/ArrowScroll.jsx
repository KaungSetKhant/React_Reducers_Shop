import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowScroll = () => {
  return (
    <div>
      <button
        className="rounded-[50%]"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem 1rem",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "pink",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ArrowScroll;
