import { useState, useEffect } from "react";
import Banner from "./Banner";
import { miscImageCorrection, miscUrl } from "../../Constant";

function Contact() {
  const [contactUs, setContact] = useState([]);

  const options = { method: "GET", headers: { accept: "application/json" } };

  useEffect(() => {
    const contactList = () => {
      fetch(miscUrl, options)
        .then((res) => res.json())
        .then((contactData) => {
          setContact(miscImageCorrection(contactData));
        });
    };

    contactList();
  }, []);

  return (
    <>
      {contactUs[0] && (
        <Banner
          title="Contact Us"
          image={contactUs[0].contactUsBannerImageUrl}
        />
      )}
      <section className="container-fluid contact-wrapper mb-5">
        <div className="container">
          <div className="row">
            <h3 className="text-capitalize text-center font-header-Font mb-3 mb-lg-5">
              Like What We Do? Please do reach out
            </h3>
            <form action="" className="bg-colorwhite p-3">
              <div className="form-group mb-3">
                <label for="name_value" className="d-inline-block mb-2">
                  Enter your Name
                </label>
                <input
                  type="text"
                  value=""
                  placeholder="your name"
                  className="font-textRegular text-font-base w-100"
                  id="name_value"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="email_value" className="d-inline-block mb-2">
                  Enter Your Email Id
                </label>
                <input
                  type="email"
                  value=""
                  placeholder="your email"
                  className="font-textRegular text-font-base w-100"
                  id="email_value"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="phone_value" className="d-inline-block mb-2">
                  Enter Your Phone Number
                </label>
                <input
                  type="tel"
                  value=""
                  maxlength="10"
                  placeholder="your phone no"
                  className="font-textRegular text-font-base w-100"
                  id="phone_value"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label for="service_value" className="d-inline-block mb-2">
                  Choose your Service
                </label>
                <select
                  name="services"
                  id="service_value"
                  className="font-textRegular text-font-base w-100"
                  required
                >
                  <option value="Select Your Service">
                    Select Your Service
                  </option>
                  <option value="PhotoGraphy">PhotoGraphy</option>
                  <option value="Design">Design</option>
                  <option value="Copy Writing">Copy Writing</option>
                  <option value="Branding">Branding</option>
                </select>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-colorred font-textRegular p-3 mt-4 text-colorwhite text-capitalize text-decoration-none border-0"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
