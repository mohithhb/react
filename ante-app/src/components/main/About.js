import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { miscImageCorrection, miscUrl } from "../../Constant";

function About() {
  const [about, setAbout] = useState([]);

  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    const AboutList = () => {
      fetch(miscUrl, options)
        .then((res) => res.json())
        .then((aboutData) => {
          setAbout(miscImageCorrection(aboutData));
        });
    };

    AboutList();
  }, []);

  return (
    <>
      {about[0] && (
        <Banner title="About Us" image={about[0].aboutBannerImageUrl} />
      )}
      ;
      {about[0] && (
        <section className="container-fluid mb-5">
          <div className="container">
            <div className="row">
              <h3 className="font-header-Font text-center mb-3">
                What do we do?
              </h3>
              <p className="font-textRegular text-font-base text-center">
                {about[0].title}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default About;
