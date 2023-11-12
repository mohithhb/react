import React from "react";
import { useState, useEffect } from "react";
import { imageCorrection } from "../../Constant";
import { useParams } from "react-router-dom";

import Banner from "./Banner";

function Services() {
  const [servDetails, setServiceDetails] = useState([]);
  const { Id } = useParams();
  useEffect(() => {
    const getServicesDetails = () => {
      fetch(`http://localhost:5000/api/services/${Id}`)
        .then((res) => res.json())
        .then((servData) => {
          console.log(servData);
          setServiceDetails(imageCorrection(servData));
        });
    };

    getServicesDetails();
  }, []);
  console.log(Id, servDetails.imageUrl);

  return (
    <>
      <Banner title={servDetails.title} image={servDetails.imageUrl} />
      <section className="container-fluid mt-5">
        <div className="container">
          <h3 className="text-colorblack font-header-Font text-center mb-4 fw-bold text-capitalize">
            What does this Service Include?
          </h3>
          <div className="row">
            <p className="text-center">{servDetails.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
