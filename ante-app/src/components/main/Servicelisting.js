import { useEffect, useState } from "react";
import {
  BASE_URL,
  imageCorrection,
  miscImageCorrection,
  miscUrl,
} from "../../Constant";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function ServiceListing() {
  const [service, setService] = useState([]);
  const [currUrl, setUrl] = useState(window.location.href);
  const [serviceBanner, getService] = useState([]);

  useEffect(() => {
    setUrl(currUrl);
  }, [currUrl]);

  useEffect(() => {
    const getServices = () => {
      fetch("https://ante-api-project.onrender.com/api/services")
        .then((res) => res.json())
        .then((servData) => {
          setService(imageCorrection(servData));
        });
    };

    const setServices = () => {
      fetch(miscUrl)
        .then((res) => res.json())
        .then((bannerData) => {
          getService(miscImageCorrection(bannerData));
        });
    };

    setServices();
    getServices();
  }, []);

  let sliceData = service;

  if (currUrl === BASE_URL || currUrl === BASE_URL + "home") {
    sliceData = service.slice(0, 4);
  }

  return (
    // service section starts here
    <>
      {currUrl === BASE_URL + "services" && serviceBanner[0] && (
        <Banner
          title="Services"
          image={serviceBanner[0].serviceListBannerImageUrl}
        />
      )}
      <section className="container-fluid services my-5 pb-3">
        <div className="container">
          <h3 className="text-center font-header-Font fw-bold mb-4">
            Services
          </h3>
          <div className="row">
            {sliceData.map((services) => {
              const {
                id,
                title = "",
                description = "",
                imageUrl = "",
              } = services;
              return (
                <div className="col-lg-3 col-md-6 col-xs-12 mb-4" key={id}>
                  <Link to={"/services/" + id} className="text-decoration-none">
                    <div className="services-card bg-colorwhite p-3 mb-4 mb-lg-0">
                      <img src={imageUrl} alt={title} className="img-fluid" />
                      <div className="services-details">
                        <h4 className="font-header-Font mt-4 mb-2 text-capitalize text-colorblack">
                          {title}
                        </h4>
                        <p className="text-colorblack text-font-base font-textRegular">
                          {description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {(currUrl === BASE_URL || currUrl === BASE_URL + "home") && (
            <div className="text-center mt-4">
              <Link
                to="/services"
                className="text-decoration-none explore-more bg-colorred p-3 text-colorwhite font-textRegular text-font-base mx-auto"
              >
                Explore More
              </Link>
            </div>
          )}
        </div>
      </section>
    </>

    // service section ends here
  );
}

export default ServiceListing;
