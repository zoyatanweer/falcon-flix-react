import React from "react";
// import PropTypes from "prop-types";
import "./HomepageVideo.css";

const HomepageVideo = () => (
  <div className="video-responsive">
    <iframe
      //   width="853"
      //   width="500"
      //   height="480"
      //   height="200"
      //   src={`https://www.youtube.com/embed/${embedId}`}

      src="https://www.youtube.com/embed/Go8nTmfrQd8"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

// HomepageVideo.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

export { HomepageVideo };
