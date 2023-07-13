import { SidePanelMenu } from "../SidePanelMenu";
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const windowWidth = document.documentElement.clientWidth;
  console.log("width: ", windowWidth);
  const tabNum = GetTabFromUrl();

  return (
    <>
      <div className="javi-header">
        <Link
          className={`javi-header-logo ${tabNum === 0 && "active-tab"}`}
          style={{ paddingLeft: "20px" }}
          to="/"
        >
          PLAGA
        </Link>
        {windowWidth > 600 ? (
          <div className="javi-header-tabs">
            <Link
              className={`javi-header-tab ${tabNum === 1 && "active-tab"}`}
              to="/films"
            >
              FILMS
            </Link>
            <Link
              className={`javi-header-tab ${tabNum === 2 && "active-tab"}`}
              to="/commercials"
            >
              COMMERCIALS
            </Link>

            <Link
              className={`javi-header-tab ${tabNum === 3 && "active-tab"}`}
              to="/music-videos"
            >
              MUSIC-VIDEOS
            </Link>

            <Link
              className={`javi-header-tab ${tabNum === 4 && "active-tab"}`}
              to="/photography"
            >
              PHOTOGRAPHY
            </Link>

            <Link
              className={`javi-header-tab ${tabNum === 5 && "active-tab"}`}
              to="/about"
            >
              ABOUT
            </Link>

            <Link
              className={`javi-header-tab ${tabNum === 6 && "active-tab"}`}
              to="/contact"
            >
              CONTACT
            </Link>
          </div>
        ) : (
          <div style={{ paddingRight: "20px" }}>
            <SidePanelMenu tabNum={tabNum} />
          </div>
        )}
      </div>
    </>
  );
};

const GetTabFromUrl = () => {
  const location = useLocation();
  const pathName = location.pathname;

  if (pathName.startsWith("/films")) {
    return 1;
  } else if (pathName.startsWith("/commercials")) {
    return 2;
  } else if (pathName.startsWith("/music-videos")) {
    return 3;
  } else if (pathName.startsWith("/photography")) {
    return 4;
  } else if (pathName.startsWith("/about")) {
    return 5;
  } else if (pathName.startsWith("/contact")) {
    return 6;
  } else {
    return 0;
  }
};
