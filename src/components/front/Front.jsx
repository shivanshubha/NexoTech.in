import "./Fron.css";
import Abouts from "../about/Abouts";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Service from "../service/Service";

function Front({ setShow }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="Front-main-main-cont" onClick={() => setShow(false)}>
        {/* slider  */}
        <Slider />

        {/* service  */}
        <Service />

        {/* products 4 */}

        <div className="front-products-main-div">
          <div className="products-heading">
            <h1>Products</h1>
          </div>
          <div className="front-main-cards-div">
            <Link
              to={"/products"}
              className="front-cards"
              data-aos="zoom-in-up"
            >
              <div className="front-img-div">
                <img
                  src="https://www.wireclothchina.com/products/stainless-steel-screen-mesh/stainless-steel-screen-mesh-001.jpg"
                  alt=""
                />
              </div>
              <div className="front-title-div">
                <p>100% steel wire mesh(100 SS).</p>
              </div>
            </Link>
            <Link
              to={"/products"}
              className="front-cards"
              data-aos="zoom-in-up"
            >
              <div className="front-img-div">
                <img
                  src="https://ecatalog.bbraun.com/medias/CT-OptileneMesh-2.jpg?context=bWFzdGVyfHJvb3R8NjgxMTd8aW1hZ2UvanBlZ3xoNTEvaGU2LzkxODc3OTAyOTA5NzQuanBnfDE2ZmVhOGE2YTY0MTIyZTc2YWY0ZWY5ZmZlM2U1MjZhNGVlMzdmYzdiZjEzMjNhYzUyOTdjNWU5NzI3ZjA2MTk"
                  alt=""
                />
              </div>
              <div className="front-title-div">
                <p>With one end of para-aramid yarn (SS 1PA)</p>
              </div>
            </Link>
            <Link
              to={"/products"}
              className="front-cards"
              data-aos="zoom-in-up"
            >
              <div className="front-img-div">
                <img
                  src="https://www.freudenberg-pm.com/-/media/Images/www,-d-,freudenbergpm,-d-,com/Materials/Weft/Content_weft_rundstrick.jpg"
                  alt=""
                />
              </div>
              <div className="front-title-div">
                <p>With two ends of para-aramid yarn (SS 2PA).</p>
              </div>
            </Link>
            <Link
              to={"/products"}
              className="front-cards"
              data-aos="zoom-in-up"
            >
              <div className="front-img-div">
                <img
                  src="https://3.imimg.com/data3/SV/JA/MY-6814402/net-fabric-500x500.jpg"
                  alt=""
                />
              </div>
              <div className="front-title-div">
                <p>With three ends of para-aramid yarn (SS 3PA).</p>
              </div>
            </Link>
          </div>
        </div>

        {/* abouts  */}
        <Abouts />
      </div>
    </>
  );
}

export default Front;
