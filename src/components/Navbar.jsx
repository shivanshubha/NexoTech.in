import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavLogo from "./navLogo.png";

function Navbar({ show, setShow }) {
  return (
    <>
      <div className="nav-man-cont">
        <div className="nav-left-div">
          <Link to={"/"} className="logo-div">
            <img src={NavLogo} alt="" />
          </Link>
        </div>
        <div className="nav-right-div">
          <div className="nav-content-div">
            <Link to={"/"} className="xy">
              <h4>Home</h4>
            </Link>
            <Link to={"/about"} className="xy">
              <h4>About</h4>
            </Link>
            <Link to={'/services'} className="xy">
              <h4>Service</h4>
            </Link>
            <Link to={"/products"} className="xy">
              <h4>Products</h4>
            </Link>
            <Link to={"/contact"} className="xy">
              <h4>Contact</h4>
            </Link>
          </div>
          <div className="menu-div" onClick={() => setShow(!show)}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div className={show ? "slide-div-show" : "slide-div-hide"}>
        <Link to={"/"} onClick={() => setShow(false)}>
          <h4>Home</h4>
        </Link>
        <Link to={"/about"} onClick={() => setShow(false)} className="slide-co">
          <h4>About</h4>
        </Link>
        <Link to={"/services"} className="slide-co">
          <h4>Service</h4>
        </Link>
        <Link
          to={"/products"}
          className="slide-co"
          onClick={() => setShow(false)}
        >
          <h4>Products</h4>
        </Link>
        <Link
          to={"/contact"}
          className="slide-co"
          onClick={() => setShow(false)}
        >
          <h4>Contact</h4>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
