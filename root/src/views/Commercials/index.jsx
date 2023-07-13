import PropTypes from "prop-types";
import { ContentGrid } from "../../components/ContentGrid";

export const Commercials = ({ className, contentData }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <ContentGrid contentDb={contentData} />
    </div>
  );
};

Commercials.propTypes = {
  className: PropTypes.string,
  contentData: PropTypes.array,
};
