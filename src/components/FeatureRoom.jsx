import React, { Component } from "react";
import { RoomContext } from "../Context";

class FeatureRoom extends Component {
  static contextType = RoomContext;
  render() {
    return (
      <div>
        <p>from featured room</p>
      </div>
    );
  }
}

export default FeatureRoom;
