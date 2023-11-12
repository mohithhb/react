import { useState, useEffect } from "react";
import {
  BASE_URL,
  imageCorrection,
  miscImageCorrection,
  miscUrl,
} from "../../Constant";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function Bloglisting() {
  const [bloglist, getBlogs] = useState([]);
  const [currUrl, setUrl] = useState(window.location.href);
  const [blogBanner, setBlogBanner] = useState([]);

  useEffect(() => {
    setUrl(currUrl);
  }, []);

  useEffect(() => {
    const blogsList = () => {
      fetch("http://localhost:5000/api/blogs")
        .then((res) => res.json())
        .then((blogData) => {
          getBlogs(imageCorrection(blogData));
        });
    };

    const setBlog = () => {
      fetch(miscUrl)
        .then((res) => res.json())
        .then((blogData) => {
          setBlogBanner(miscImageCorrection(blogData));
        });
    };

    setBlog();
    blogsList();
  }, []);

  console.log(typeof bloglist);
  let sliceData = bloglist;

  if (currUrl === BASE_URL || currUrl === BASE_URL + "home") {
    sliceData = bloglist.slice(0, 3);
  }

  return (
    // blog section starts here
    <>
      {currUrl == BASE_URL + "blog" && blogBanner[0] && (
        <Banner title="Blogs" image={blogBanner[0].blogListBannerImageUrl} />
      )}
      <section className="container-fluid my-5 pb-3">
        <div className="container">
          <h3 className="font-header-Font text-capitalize text-center mb-4 text-colorblack fw-bold">
            Blogs
          </h3>
          <div className="row">
            {bloglist &&
              sliceData.map((blog) => {
                const { id, title, description, imageUrl } = blog;
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12" key={id}>
                    <div className="blog-home-wrapper mb-5">
                      <div className="blog-img-wrapper">
                        <img src={imageUrl} alt={title} className="img-fluid" />
                      </div>
                      <div className="blog-home-details">
                        <h4 className="font-header-Font fw-bold mt-3 mb-1">
                          {title}
                        </h4>
                        <p className="font-textRegular text-font-base mb-4">
                          {description}
                        </p>
                        <Link
                          to={"/blog/" + id}
                          className="bg-colorred font-textRegular p-3 text-colorwhite text-capitalize text-decoration-none"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>

    // blog section ends here
  );
}

export default Bloglisting;
