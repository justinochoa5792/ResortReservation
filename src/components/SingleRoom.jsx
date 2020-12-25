import React, { Component } from "react";
import { Link } from "react-router-dom";

import { RoomContext } from "../Context";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "./Hero";
import Banner from "./Banner";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg: defaultBcg,
  };
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such Room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <div>
        <Hero hero="roomsHero" />
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </div>
    );
  }
}

export default SingleRoom;
