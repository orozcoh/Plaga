import PropTypes from "prop-types";
import { ContentGrid } from "../../components/ContentGrid";

export const MusicVideos = ({ className, contentData }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ContentGrid contentDb={contentData} />
    </div>
  );
};

MusicVideos.propTypes = {
  className: PropTypes.string,
  contentData: PropTypes.array,
};
