import PropTypes from "prop-types";

export const MusicVideos = ({ className }) => {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <span style={{ fontSize: "200px" }}>🚧</span>
      <div style={{ fontSize: "50px" }}>Music Videos</div>
    </div>
  );
};

MusicVideos.propTypes = {
  className: PropTypes.string,
};
