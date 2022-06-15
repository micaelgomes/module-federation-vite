import React from "react";

const Button: React.FC = () => {
  return (
    <button
      onClick={() => alert("Click no remote")}
      style={{ background: "green", padding: 16, margin: 8 }}
    >
      Clique-me
    </button>
  );
};

export default Button;
