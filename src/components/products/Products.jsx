import "./Produc.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { items } from "../Data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ setShow }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [data, setData] = useState([...items]);
  return (
    <>
      <div className="products-main-main-cont" onClick={() => setShow(false)}>
        <div className="products-main-cont">
          {data.map((product) => {
            return (
              <>
                <Link
                  key={product.id}
                  to={`/productdetails/${product.id}`}
                  className="products-cards-div"
                  data-aos="zoom-in-up"
                >
                  <div className="products-img-div">
                    <img src={product.img1} alt="" />
                  </div>
                  <div className="products-title-div">
                    <p>{product.title}</p>
                  </div>
                  <div className="products-price-div">
                    <p> {product.price}</p>
                  </div>
                  <Link to={'/contact'} className="Enquire-div">Enquire</Link>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
