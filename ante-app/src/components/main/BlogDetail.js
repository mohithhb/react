import React from "react";
import { useState, useEffect } from "react";
import { imageCorrection } from "../../Constant";
import { useParams } from "react-router-dom";
import Banner from "./Banner";

function BlogDetail() {
  const [blogDetails, setBlogDetails] = useState([]);
  const { Id } = useParams();
  useEffect(() => {
    const getServicesDetails = () => {
      fetch(`https://ante-api-project.onrender.com/api/blogs/${Id}`)
        .then((res) => res.json())
        .then((blogDetData) => {
          console.log(blogDetData);
          setBlogDetails(imageCorrection(blogDetData));
        });
    };

    getServicesDetails();
  }, []);
  return (
    <>
      <Banner title={blogDetails.title} image={blogDetails.imageUrl} />
      <section className="container-fluid my-5">
        <div className="container">
          <h3 className="text-colorblack font-header-Font text-center mb-4 fw-bold text-capitalize">
            {blogDetails.title}
          </h3>
          <div className="row">
            <p className="text-center">{blogDetails.description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
