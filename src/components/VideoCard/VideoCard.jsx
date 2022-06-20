import React from "react";

const VideoCard = () => {
  return (
    <>
      <div className="video-card-container">
        <div className="video-display">
          {/* <img></img> */}
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
      </div>
    </>
  );
};
export { VideoCard };