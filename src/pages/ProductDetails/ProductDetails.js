import React, { useState } from "react";
import "./ProductDetails.css";

import product1 from "../../images/product_1.png";
import product2 from "../../images/product_2.png";
import product3 from "../../images/product_3.png";
import medal from "../../images/medal.png";
import verified from "../../images/verified.png";
import star from "../../images/star.png";

import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Tab, Nav, Badge, Accordion, Row, Col, Card } from "react-bootstrap";

const images = [product1, product2, product3];

const ProductDetails = () => {
  const [activeImage, setactiveImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(0);
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const changeActiveImage = (image) => {
    setactiveImage(image);
  };

  return (
    <div className="main_container">
      <div className="details_left">
        <div className="left_top">
          <div
            style={{
              width: "28rem",
              height: "15rem",
              boxShadow: "2px -2px 25px -5px rgba(0,0,0,0.75)",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={activeImage}
              alt=""
              style={{
                width: "18rem",
                height: "15rem",
              }}
            />
          </div>
          <ImageSlider
            images={images}
            changeActiveImage={changeActiveImage}
            activeImage={activeImage}
          />
          <div>
            <label style={{ fontSize: ".8rem" }}>
              Quantity <span style={{ color: "rgb(241, 56, 56)" }}>*</span>
            </label>
            <div style={{ display: "flex", gap: ".5rem" }}>
              <input
                type="text"
                style={{
                  border: ".1rem solid",
                  borderRadius: ".5rem",
                  outline: "none",
                  padding: "0 .5rem",
                }}
                value={quantity}
              />
              <button className="button_class">Add To Cart</button>
              <button className="button_class">Inquery</button>
            </div>
          </div>
        </div>
        <div className="left_bottom">
          <Tab.Container activeKey={activeTab}>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link
                  eventKey="tab1"
                  onClick={() => handleTabSelect("tab1")}
                  className="custom_nav_link"
                >
                  Rating & reviews
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="tab2"
                  onClick={() => handleTabSelect("tab2")}
                >
                  Q&A
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="tab1">
                <p>No Reviews Posted Yet.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
                <p>No Q&A Posted Yet.</p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
      <div className="details_right">
        <div className="product_details">
          <div className="product_details_top">
            <div className="p_tags">
              <span
                style={{
                  border: "1px solid rgb(241, 56, 56)",
                  color: "rgb(241, 56, 56)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".4rem",
                }}
              >
                <img src={verified} alt="" className="icon_img"></img> AWAFX
                choice
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: ".4rem",
                }}
              >
                <img src={medal} alt="" className="icon_img"></img> Bestseller
              </span>
            </div>
            <h2>Water Bottol</h2>
            <div className="reviews">
              <Badge bg="dark">
                <img src={star} alt="" className="icon_img"></img>{" "}
                <span style={{ fontSize: "1rem" }}>0</span>
              </Badge>
              <span
                style={{
                  height: ".5rem",
                  width: ".5rem",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              ></span>
              <span>0 reviews</span>
            </div>
            <div className="saller_details">
              <span style={{ color: "gray" }}>Saller</span>
              <span>seller second Shop 2</span>
            </div>
            <div className="price">
              <span style={{ fontWeight: "500" }}>₹ 200</span>
            </div>
            <div>
              <span
                style={{
                  color: "rgb(241, 56, 56)",
                  fontSize: ".8rem",
                  fontWeight: "500",
                }}
              >
                see price from more saller...
              </span>
            </div>
          </div>
          <div className="product_details_bottom">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Basic details</Accordion.Header>
                <Accordion.Body>
                  <div className="acc_body_itm">
                    <span className="item_title">Brand</span>
                    <span className="item_value">Demo</span>
                  </div>
                  <div className="acc_body_itm">
                    <span className="item_title">Warranty</span>
                    <span className="item_value">1 Year</span>
                  </div>
                  <div className="acc_body_itm">
                    <span className="item_title">Brand</span>
                    <span className="item_value">Demo</span>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Specifications</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="f_b_t_list">
          <h6 style={{ textAlign: "center" }}>Frequently bought together</h6>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <input type="checkbox" className="checkbox_round"></input>
                  </div>
                  <Card.Img variant="top" src={product1} />
                  <Card.Body>
                    <Card.Title>
                      <img src={verified} alt="" className="icon_img"></img>{" "}
                      <img src={medal} alt="" className="icon_img"></img>
                    </Card.Title>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                      <div className="pro_oth_details">
                        <span style={{ color: "gray" }}>Demo brand</span>
                        <span style={{ fontWeight: "500" }}>₹ 900</span>
                        <div style={{ display: "flex", gap: ".5rem" }}>
                          <Badge bg="dark">
                            <img src={star} alt="" className="icon_img"></img>{" "}
                            <span style={{ fontSize: "1rem" }}>0</span>
                          </Badge>
                          <span style={{ fontSize: "1rem" }}>(0)</span>
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1rem",
            }}
          >
            <button className="button_class">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
