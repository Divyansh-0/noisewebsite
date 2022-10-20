import { useState } from "react";
import "./Dropdwon.css";

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        choose
        {isActive && (
          <div className="dropdown-content">
            <div className="dropdown-item">A</div>
            <div className="dropdown-item">B</div>
            <div className="dropdown-item">C</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
