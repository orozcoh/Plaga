import PropTypes from "prop-types";
import "./style.css";

const YoutubePlayer = ({ videoId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubePlayer;
