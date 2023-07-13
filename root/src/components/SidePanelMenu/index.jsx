/* import { useState } from "react";
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
        <button onClick={togglePanel}>Toggle Panel</button>
      </div>
    </div>
  );
}; */

import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SidePanelMenu = ({ tabNum }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("tab num: ", tabNum);
  return (
    <div className="javi-header-sidepanel">
      <span
        style={{ color: "white", fontSize: "40px" }}
        onClick={() => setIsOpen(!isOpen)}
        className="material-icons"
      >
        menu
      </span>
      <Modal
        className="modal-sidepanel"
        style={{ color: "red", margin: 0 }}
        show={isOpen}
        size="lg"
        onHide={() => setIsOpen(false)}
      >
        <Modal.Body style={{ padding: "0px" }}>
          <div className={`side-panel ${isOpen ? "open" : ""}`}>
            <div className="javi-sidepanel-tabs">
              <Link
                className={`javi-sidepanel-tab ${tabNum === 1 && "active-tab"}`}
                onClick={() => setIsOpen(!isOpen)}
                to="/films"
              >
                FILMS
              </Link>
              <Link
                className={`javi-sidepanel-tab ${tabNum === 2 && "active-tab"}`}
                onClick={() => setIsOpen(!isOpen)}
                to="/commercials"
              >
                COMMERCIALS
              </Link>

              <Link
                className={`javi-sidepanel-tab ${tabNum === 3 && "active-tab"}`}
                onClick={() => setIsOpen(!isOpen)}
                to="/music-videos"
              >
                MUSIC-VIDEOS
              </Link>

              <Link
                className={`javi-sidepanel-tab ${tabNum === 4 && "active-tab"}`}
                onClick={() => setIsOpen(!isOpen)}
                to="/photography"
              >
                PHOTOGRAPHY
              </Link>

              <Link
                className={`javi-sidepanel-tab ${tabNum === 5 && "active-tab"}`}
                onClick={() => setIsOpen(!isOpen)}
                to="/about"
              >
                ABOUT
              </Link>

              <Link
                className={`javi-sidepanel-tab ${tabNum === 6 && "active-tab"}`}
                onClick={() => setIsOpen(!isOpen)}
                to="/contact"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

SidePanelMenu.propTypes = {
  tabNum: PropTypes.number,
};
