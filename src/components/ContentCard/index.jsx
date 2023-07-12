import { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import { ContentModal } from "../ContentModal";

export const ContentCard = ({ contentData, className }) => {
  const { videoId, platform } = contentData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  let thumbNail = "/";
  if (platform === "Youtube") {
    thumbNail = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
  }

  return (
    <>
      <div
        className={`javi-content-card ${className} animated-text`}
        onClick={() => setIsModalOpen(true)}
      >
        <div>
          <img
            //width="170px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src={thumbNail}
          />
          <span className="overlay material-icons">play_circle_outline</span>
        </div>
        {/*         <div>
          <span style={{ color: "white", fontWeight: 800 }}>As: </span>
          <span style={{ color: "white", fontWeight: 400 }}>{colabType}</span>
        </div> */}
      </div>
      <ContentModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        contentData={contentData}
      />
    </>
  );
};

ContentCard.propTypes = {
  contentData: PropTypes.object,
  className: PropTypes.string,
};
