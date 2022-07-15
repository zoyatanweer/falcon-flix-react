import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context/VideoContext";

import "./Explore.css";
import "../../components/VideoCard/VideoCard.css";
import { Categories } from "../../components/Categories/Categories";

const Explore = () => {
  return (
    <>
      <div className="main-page-content">
        <Sidebar className="item-c" />
        <div className="main-content">
          <div className="videos-container">
            <Categories />
            <VideoCard />
          </div>
        </div>
      </div>
    </>
  );
};

export { Explore };
