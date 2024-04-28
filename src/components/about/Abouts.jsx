import "./Abou.css";
import { FaEnvelope, FaFacebookF, FaTwitter } from "react-icons/fa";

function Abouts() {
  return (
    <>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content-section">
            <div className="about-title">
              <h1>About Us</h1>
            </div>
            <div className="about-content">
              {/* <h3>
                Nexotech advance was formed in January 2024 in accordance with
                the guidelines of the Ministry of corporate Affairs Government
                of India.{" "}
              </h3> */}
              <p>
                NexoTech Advance is the manufacturer of wire-mesh by utilizing
                high performance yarns such as Ultra-high molecular weight
                polyethylene (UHMwPE) and Aramid. Blend of different high
                performance yarns have been utilized also for specific
                applications.
              </p>

              <div className="about-button">
                <a href="">Read More</a>
              </div>
            </div>
            <div className="about-social">
              <a href="">
                <FaEnvelope />
              </a>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="image-about-section">
            <img
              src="https://smartblogger.com/wp-content/uploads/2020/07/best-about-us-pages.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouts;
