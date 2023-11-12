import React from "react";
import Banner from "./Banner";
import ServiceListing from "./Servicelisting";
import Clientele from "./Clientele";
import Bloglisting from "./Bloglisting";

function HomePage() {
  return (
    <div>
      <Banner />
      <ServiceListing />
      <Clientele />
      <Bloglisting />
    </div>
  );
}

export default HomePage;
