import React from "react";
import "./HomepageVideo.css";

const HomepageVideo = () => (
  <div className="video-responsive">
    <iframe
      src="https://www.youtube.com/embed/Go8nTmfrQd8"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export { HomepageVideo };
