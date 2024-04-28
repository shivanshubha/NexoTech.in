import "./Slide.css";
import Video from "../videoplayback final.mp4";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <>
      <div className="sli-container">
        <div className="overlay"></div>

        <video
          src={Video}
          autoPlay
          muted
          loop
          playsInline
          className="videoClip"
        ></video>

        <div className="overlay-content">
          <h1>NexoTech Advance</h1>
          <p>
            NexoTech Advace is the manufacturer of wire-mesh by utilizing high
            performance yarns such as Ultra-high molecular weight polyethylene
            (UHMwPE) and Aramid. Blend of different high performance yarns have
            been utilized also for specific applications.
          </p>
          <div className="buttton-section">
            {/* <Link to={'/about'} ><button className="Discover">Discover NexoTech Advance</button></Link> */}
            <Link to={"/contact"}>
              {" "}
              <button className="Contact">Contact Us</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
