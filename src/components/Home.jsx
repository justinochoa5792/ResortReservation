import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Services from "./Services";
import FeatureRoom from "./FeatureRoom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRoom />
    </>
  );
};

export default Home;
