import PropTypes from "prop-types";
import { ContentGrid } from "../../components/ContentGrid";

export const Photography = ({ className, contentData }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ContentGrid contentDb={contentData} />
    </div>
  );
};

Photography.propTypes = {
  className: PropTypes.string,
  contentData: PropTypes.array,
};
