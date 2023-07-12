import PropTypes from "prop-types";

export const Contact = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span style={{ fontSize: "200px" }}>🚧</span>
      <div style={{ fontSize: "50px" }}>Contact</div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};
