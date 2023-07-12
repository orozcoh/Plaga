import PropTypes from "prop-types";

export const Commercials = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span style={{ fontSize: "200px" }}>🚧</span>
      <div style={{ fontSize: "50px" }}>Commercials</div>
    </div>
  );
};

Commercials.propTypes = {
  className: PropTypes.string,
};
