import { Col, Row } from "antd";
import React from "react";
import Header from "../header/header";

const awardscard = [
  { src: "https://www.youtube.com/embed/YkmQBe1Lebk" },
  { src: "https://www.youtube.com/embed/hrUdXoxY2nw" },
  { src: "https://www.youtube.com/embed/vKRGP_M8uwU" },
  { src: "https://www.youtube.com/embed/nce0C4wAU5Y" },
  // { src: "https://www.youtube.com/embed/3dSwb2a8RTY" },
];

const Csr = () => {
  return (
    <>
      <img
        src="Sources/images/csr/CSR.JPG"
        alt="404 -Not Given"
        className="about_img"
        // style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-5 mt-3">
                Hitech has always been a firm believer in giving back to the
                community, and has therefore consistently committed resources to
                doing its part for the welfare of the society. Below are some of
                our corporate social responsibility initiatives.
              </p>
              <div className="mt-5" style={{ marginLeft: "3%" }}>
                <li>Education for construction worker children</li>
                <br />
                <li>Regular medical, eye checkup camps at labour colonies .</li>
                <br />
                <li>Workshops on AIDS, tobacco and alcohol awareness.</li>
                <br />
                <li>
                  Malnutrition related awareness and nutrition grocery kit
                  distribution.
                </li>

                <li>
                  Support for Gramsetu (Meghraj, Arravali District) initiative
                  by Dreams Foundation.
                </li>
                <br />
                <li>
                  Support patient care and medical equipment to various
                  charitable hospitals.
                </li>
                <br />
                <li>Support for stray animal welfare.</li>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                  {/* <Col
                    xxl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="my-5">
                      <iframe width="100%" height="500px" src={item.src}></iframe>
                      <img src="Sources/images/csr/Untitled.png"></img>
                    </div>
                  </Col> */}

                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/1.jpg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/2.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/3.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/4.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/5.jpeg" />
                  </Col>
                  <Col xxl={6} lg={8} md={12} sm={24} xs={24} className="m-2">
                    <img src="Sources/images/csr/6.jpeg" />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};
export default Csr;
