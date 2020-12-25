import React from "react";
import loadingGif from "../images/gif/loading-gear.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>Rooms Data Loading...</h4>
      <img src={loadingGif} alt="gif" />
    </div>
  );
};

export default Loading;
