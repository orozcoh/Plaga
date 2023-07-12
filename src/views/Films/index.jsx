import PropTypes from "prop-types";
import { ContentGrid } from "../../components/ContentGrid";
import { contentDb } from "../../data/db";

export const Films = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ContentGrid contentDb={contentDb} />
    </div>
  );
};

Films.propTypes = {
  className: PropTypes.string,
  contentData: PropTypes.any,
};
