//import { SidePanelMenu } from "../SidePanelMenu";
import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="javi-header" style={{ height: "50px", display: "flex" }}>
        <Link className="javi-header-logo" to="/">
          PLAGA
        </Link>
        <div className="javi-header-tabs">
          <Link className="javi-header-tab" to="/films">
            FILMS
          </Link>
          <Link className="javi-header-tab" to="/commercials">
            COMMERCIALS
          </Link>

          <Link className="javi-header-tab" to="/music-videos">
            MUSIC-VIDEOS
          </Link>

          <Link className="javi-header-tab" to="/photography">
            PHOTOGRAPHY
          </Link>

          <Link className="javi-header-tab" to="/about">
            ABOUT
          </Link>

          <Link className="javi-header-tab" to="/contact">
            CONTACT
          </Link>
        </div>
        {/* <SidePanelMenu /> */}
      </div>
    </>
  );
};
