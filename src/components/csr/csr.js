import { Col, Row } from "antd";
import React from "react";

const awardscard = [
  { src: "https://www.youtube.com/embed/YkmQBe1Lebk" },
  { src: "https://www.youtube.com/embed/hrUdXoxY2nw" },
  { src: "https://www.youtube.com/embed/vKRGP_M8uwU" },
  { src: "https://www.youtube.com/embed/nce0C4wAU5Y" },
  { src: "https://www.youtube.com/embed/3dSwb2a8RTY" },
];

const Csr = () => {
  return (
    <>
      <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <Row style={{ display: "flex", justifyContent: "center" }}>
            {awardscard.map((item, key) => {
              return (
                <Col
                  xxl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  // style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="m-2">
                    <iframe width="100%" height="500px" src={item.src}></iframe>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};
export default Csr;
