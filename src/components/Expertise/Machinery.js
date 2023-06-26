import React from "react";
import { Col, Row, Space } from "antd";
import { Carousel } from "react-responsive-carousel";
import Header from "../header/header";
const machinery = [
  { src: "Sources/images/expertise/Machinery/1.png" },
  { src: "Sources/images/expertise/Machinery/2.png" },
  { src: "Sources/images/expertise/Machinery/3.png" },
  { src: "Sources/images/expertise/Machinery/4.png" },
  { src: "Sources/images/expertise/Machinery/5.png" },
  { src: "Sources/images/expertise/Machinery/6.png" },
];

const Machinery = () => {
  return (
    <>
      <img
        src="Sources/images/bg/a3.jpg"
        alt="404 -Not Given"
        className="about_img"
        //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />
      <section className="machinary mobile_margin">
        <Header />
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
                Plant And Machinery
              </p>
            </div>
            <div>
              <Row>
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <p className="has-text-left mr-4">
                    We have established a robust plant and machinery cell that
                    is responsible for repair and management system. The cell
                    also looks after resource planning, selection of right
                    equipment for procurement, installation, commissioning and
                    routine preventive maintenance. The tower cranes, passenger
                    and material hoists, concrete pumps are deployed at the
                    project sites after due consideration of the project
                    requirement, movement restrictions, perfromance requirements
                    etc.
                  </p>
                </Col>
                <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <Carousel
                    swipeable
                    autoPlay
                    infiniteLoop={true}
                    emulateTouch={true}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    interval={1000}
                    stopOnHover
                  >
                    {machinery.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%" }}
                          />
                        </div>
                      );
                    })}

                    {/* {machinery.map((item, key) => {
                        return <img src={item.src} alt="404 - Not Given" />;
                      })} 
                    </div>*/}
                  </Carousel>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};
export default Machinery;