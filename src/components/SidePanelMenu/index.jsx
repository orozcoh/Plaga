import { useState } from "react";
import "./style.css"; // Import CSS styles for the component

export const SidePanelMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePanel}>Toggle Panel</button>
      <div className={`side-panel ${isOpen ? "open" : ""}`}>
        {/* Content of the side panel */}
        <button onClick={togglePanel}>Toggle Panel</button>
      </div>
    </div>
  );
};
