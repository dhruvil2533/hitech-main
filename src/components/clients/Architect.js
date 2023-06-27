import React from "react";
import { Col, Row } from "antd";
import Header from "../header/header";

const consultantslist = [
  { src: "Sources/images/consultants/2.png" },
  { src: "Sources/images/consultants/3.png" },
  { src: "Sources/images/consultants/4.png" },
  { src: "Sources/images/consultants/5.png" },
  { src: "Sources/images/consultants/6.png" },
  { src: "Sources/images/consultants/7.png" },
  { src: "Sources/images/consultants/8.png" },
  { src: "Sources/images/consultants/9.png" },
  { src: "Sources/images/consultants/10.png" },
  { src: "Sources/images/consultants/11.png" },
  { src: "Sources/images/consultants/12.png" },
  { src: "Sources/images/consultants/13.png" },
  { src: "Sources/images/consultants/14.png" },
  { src: "Sources/images/consultants/15.png" },
  { src: "Sources/images/consultants/16.png" },
  { src: "Sources/images/consultants/17.png" },
  { src: "Sources/images/consultants/18.png" },
  { src: "Sources/images/consultants/19.png" },
  { src: "Sources/images/consultants/20.png" },
  { src: "Sources/images/consultants/21.png" },
  { src: "Sources/images/consultants/22.png" },
  { src: "Sources/images/consultants/23.png" },
  { src: "Sources/images/consultants/24.png" },
  { src: "Sources/images/consultants/25.png" },
  { src: "Sources/images/consultants/26.png" },
  { src: "Sources/images/consultants/27.png" },
  { src: "Sources/images/consultants/28.png" },
  { src: "Sources/images/consultants/29.png" },
  { src: "Sources/images/consultants/30.png" },
  { src: "Sources/images/consultants/31.png" },
  { src: "Sources/images/consultants/32.png" },
  { src: "Sources/images/consultants/33.png" },
  { src: "Sources/images/consultants/34.png" },
  { src: "Sources/images/consultants/35.png" },
  { src: "Sources/images/consultants/36.png" },
  { src: "Sources/images/consultants/37.png" },
  { src: "Sources/images/consultants/38.png" },
  { src: "Sources/images/consultants/39.png" },
];
const Architech = () => {
  return (
    <>
      <img
        src="Sources/images/bg/a3.jpg"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />
      <Header />
      <section>
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
              Architect And Consultants
            </p>
            <p className="is-size-6 has-text-centered mb-3">
              We work closely with a wide range of Architect and Consultants
              from different sectors and regions. These are just some of the
              people we’re proud to work with:
            </p>
          </div>
          <div>
            <Row>
              {consultantslist.map((item, key) => {
                return (
                  <Col xxl={4} lg={4} md={6} sm={12} xs={12}>
                    <div className="client_logo">
                      <img src={item.src} alt="404 - Not Given" />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Architech;
