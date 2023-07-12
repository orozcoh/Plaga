import PropTypes from "prop-types";

export const About = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <img width="500px" src="Javi_About.jpg" />
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};
