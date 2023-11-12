import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, imageCorrection } from "../../Constant";

function Banner({ title, image }) {
  const [banner, SetBanner] = useState(null);
  const [currUrl, setUrl] = useState(window.location.href);

  useEffect(() => {
    setUrl(currUrl);
  }, []);

  const bannerUrl = "http://localhost:5000/api/banner";
  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    const getBanner = () => {
      fetch(bannerUrl, options)
        .then((res) => res.json())
        .then((newData) => {
          SetBanner(imageCorrection(newData));
        })
        .catch((err) => console.log(err));
    };

    getBanner();
  }, []);

  // console.log(BASE_URL + "about");

  if ((currUrl === BASE_URL || currUrl === BASE_URL + "home") && banner) {
    return (
      <section
        className="container-fluid banner-sec bg-colorlight position-relative"
        style={{
          backgroundImage: `url('${banner[0].imageUrl}')`,
          backgroundPosition: "right",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="banner-cont">
              <h2
                className="font-header-Font mb-4 w-100 typer"
                data-delay="100"
                // data-words={banner[0].description}
                data-loop="true"
              >
                {banner[0].description}
              </h2>
              <Link
                to="/contact-us"
                className="font-textRegular text-colorwhite bg-colorred p-3"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="container-fluid bg-colorlight sub-banner mb-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="about-banner position-absolute start-0 end-0 mx-auto bottom-0 my-5">
              <div className="about-content">
                <h2 className="font-header-Font text-center text-capitalize">
                  {title}
                </h2>
              </div>
              <div className="about-img img-wrapper text-center">
                <img src={image} alt="aboutus" className="img-fluid mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
