import Header from "./components/main/Header";
import Banner from "./components/main/Banner";
import ServiceListing from "./components/main/Servicelisting";
import Clientele from "./components/main/Clientele";
import Bloglisting from "./components/main/Bloglisting";
import HomePage from "./components/main/Home";
import About from "./components/main/About";
import Services from "./components/main/Services";
import BlogDetail from "./components/main/BlogDetail";
import Contact from "./components/main/Contact";
import Footer from "./components/main/Footer";

import { Routes, Route } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/global.css";

function App() {
  return (
    <div>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServiceListing />} />
          <Route path="/blog" element={<Bloglisting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services/:Id" element={<Services />} />
          <Route path="/blog/:Id" element={<BlogDetail />} />
        </Routes>
      </>
      <Footer />
      {/* <Clientele /> */}
    </div>
  );
}

export default App;
