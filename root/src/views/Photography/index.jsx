import PropTypes from "prop-types";

export const Photography = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span style={{ fontSize: "200px" }}>🚧</span>
      <div style={{ fontSize: "50px" }}>Photography</div>
    </div>
  );
};

Photography.propTypes = {
  className: PropTypes.string,
};
