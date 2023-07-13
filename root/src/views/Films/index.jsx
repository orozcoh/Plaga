import PropTypes from "prop-types";
import { ContentGrid } from "../../components/ContentGrid";

export const Films = ({ className, contentData }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ContentGrid contentDb={contentData} />
    </div>
  );
};

Films.propTypes = {
  className: PropTypes.string,
  contentData: PropTypes.array,
};
