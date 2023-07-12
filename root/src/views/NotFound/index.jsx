import PropTypes from "prop-types";

export const NotFound = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span style={{ fontSize: "200px" }}>🚧</span>
      <div style={{ fontSize: "50px" }}>Not Found</div>
    </div>
  );
};

NotFound.propTypes = {
  className: PropTypes.string,
};
