import React, { useState } from "react";
import "./ProductDetails.css";

import product1 from "../../images/product_1.png";
import product2 from "../../images/product_2.png";
import product3 from "../../images/product_3.png";

import ImageSlider from "../../components/ImageSlider/ImageSlider";

const images = [product1, product2, product3];

const ProductDetails = () => {
  const [activeImage, setactiveImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(0);
  const changeActiveImage = (image) => {
    setactiveImage(image);
  };

  return (
    <div className="main_container">
      <div className="details_left">
        <div className="left_top">
          <div style={{
              width: "28rem",
              height: "15rem",
              boxShadow: "2px -2px 25px -5px rgba(0,0,0,0.75)",
              borderRadius: "1rem",
              display:"flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
          <img
            src={activeImage}
            alt="No Image"
            style={{
              width: "18rem",
              height: "15rem"
            }}
          />
          </div>
          <ImageSlider
            images={images}
            changeActiveImage={changeActiveImage}
            activeImage={activeImage}
          />
          <div>
            <label style={{fontSize:".8rem"}}>Quantity <span style={{color:"rgb(241, 56, 56)"}}>*</span></label>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <input type="text"  style={{ border:".1rem solid", borderRadius:".5rem", outline:"none", padding:"0 .5rem" ,}} value={quantity}/>
              <button className="button_class">Add To Cart</button>
              <button className="button_class">Inquery</button>
            </div>
          </div>
        </div>
        <div className="left_bottom"></div>
      </div>
      <div className="details_right">Hello2</div>
    </div>
  );
};

export default ProductDetails;
