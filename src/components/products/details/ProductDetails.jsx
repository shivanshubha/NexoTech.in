import { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import { items } from "../../Data";

function ProductDetails({ setShow }) {
  const { id } = useParams();
  const [products, setProduct] = useState([...items]);

  useEffect(() => {
    const filterProduct = items.find((p) => p.id == id);
    setProduct(filterProduct || {});
  }, [id]);

  const [activeImg, setActiveImage] = useState(products.img1);


  return (
    <>
      <div
        className="product-detail-main-main-cont"
        onClick={() => setShow(false)}
      >
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="  flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg || products.img1}
              alt=""
              className="  aspect-square  rounded-xl"
            />
            <div className=" flex flex-row justify-evenly h-24">
              <img
                src={products.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(products.img1)}
              />
              <img
                src={products.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(products.img2)}
              />
              <img
                src={products.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(products.img3)}
              />
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <h1 className="text-3xl font-bold ">{products.title}</h1>
            </div>
            {/* <h6 className="text-2xl font-semibold">{products.price}</h6> */}

            <h2 className="font-bold">Description :</h2>
            <p className="text-gray-700 ">{products.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
