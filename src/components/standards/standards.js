import { Col, Row } from "antd";
import { BiNotepad } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { AiOutlineAudit } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import "./s.css";

const quality = [{ src: "Sources/images/standards/Quality/1.png" }];
const safety = [{ src: "Sources/images/standards/safety/1-1.JPG" }];
const safetytwo = [
  // { src: "Sources/images/standards/safety/5.png" },
  { src: "Sources/images/standards/safety/6.png" },
  // { src: "Sources/images/standards/safety/7.png" },
  // { src: "Sources/images/standards/safety/8.png" },
];
const training = [
  // { src: "Sources/images/standards/traning/1.png" },
  // { src: "Sources/images/standards/traning/2.png" },
  // { src: "Sources/images/standards/traning/3.png" },
  { src: "Sources/images/standards/traning/4.png" },
  // { src: "Sources/images/standards/traning/5.png" },
];

const Standards = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let cols = 6;
  if (width < 600) {
    cols = 6;
  } else if (width < 1200) {
    cols = 6;
  }
  return (
    <>
      <img
        src="Sources/images/standards/standards.jpg"
        alt="404 -Not Given"
        className="about_img"
      //style={{ marginLeft: window.innerWidth > 1355 ? "5%" : "" }}
      />

      <div className="about-us-bg">
        <Header />
        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
                Quality
              </p>
              <p className="is-size-4 has-text-weight-semibold has-text-centered">
                Quality over Quantity
              </p>
            </div>
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <p className="has-text-left">
                    Hitech was among the first of companies of its type to
                    achieve ISO 9001 Certification. Our success at being among
                    the leaders in our industry is based on providing quality
                    construction related services that exceed the needs of our
                    customers. We achieve this success by providing an
                    experienced and responsive team of professionals with a
                    common goal to satisfy the customer. Our philosophy of
                    continual Improvement is a vital element in our quest to be
                    among the best. We continue to build upon a positive
                    reputation in the construction industry, as we commit to
                    quality servicing for our customers.
                  </p>
                  <div className="mt-4">
                    <li>
                      Provision of processes, tools, training, and expertise to
                      improve the identification and resolution of quality
                      issues.
                    </li>
                    <li>
                      Focusing on human behaviors that drive "right the first
                      time" quality.
                    </li>
                  </div>
                  <Row>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <BiNotepad className="is-size-1 blue_color" />
                        <p>Method Statement</p>
                      </div>
                    </Col>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <BsShieldCheck className="is-size-1 blue_color" />
                        <p>Standard Material and Practices</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <AiOutlineAudit className="is-size-1 blue_color" />
                        <p>Strong Internal Audit Systems</p>
                      </div>
                    </Col>
                    <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                      <div
                        className="project_box"
                        style={{ minHeight: "153px" }}
                      >
                        <BsCardChecklist className="is-size-1 blue_color" />
                        <p>Checklists And Work Instructions</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>

              <Col xxl={11} lg={11} md={24} sm={24} xs={24}>
                <Row>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    {quality.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img className="zoom"
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </Col>
                </Row>

                {/* {quality.map((item, key) => {
                  return (
                    <div style={{ height: "100%" }}>
                      <img
                        src={item.src}
                        alt="404 - Not Given"
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  );
                })} */}
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
                Safety
              </p>
              <p className="is-size-4 has-text-weight-semibold has-text-centered">
                We believe in prevention
              </p>
            </div>
            <Row>
              {width > 768 && (
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <div>
                    {safety.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}

                    {/* {machinery.map((item, key) => {
                        return <img src={item.src} alt="404 - Not Given" />;
                      })} 
                    </div>*/}
                  </div>
                </Col>
              )}

              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <p className="has-text-left">
                    Hitech is dedicated to providing its employees and those of
                    its contractors and subcontractors a safe working
                    environment. The practice of diligence, good judgment and
                    common sense by all project team members helps to create an
                    environment in which the rate of incidents is substantially
                    reduced. Since our foundation, we have been devoted to
                    building a culture that promotes an injury-free environment.
                    To do that, we have developed extensive training and
                    education modules designed to minimize and eliminate
                    personal injury, property damage and all associated costs.
                    These ongoing programs provide our people and our partners
                    with the knowledge and resources they need to keep
                    themselves and each other safe.
                  </p>
                </div>
              </Col>
              {width < 769 && (
                <Col
                  xxl={11}
                  lg={11}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <div>
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
                      {safety.map((item, key) => {
                        return (
                          <div style={{ height: "100%" }}>
                            <img
                              src={item.src}
                              alt="404 - Not Given"
                              style={{ height: "100%", width: "100%" }}
                            />
                          </div>
                        );
                      })}

                      {/* {machinery.map((item, key) => {
                        return <img src={item.src} alt="404 - Not Given" />;
                      })} 
                    </div>*/}
                    </Carousel>
                  </div>
                </Col>
              )}
            </Row>
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  <div style={{ height: "100%" }}>
                    <img
                      src="Sources/images/standards/safety/9.png"
                      alt="404 - Not Given"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </Col>
              <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
              <Col xxl={11} lg={11} md={24} sm={24} xs={24} className="my-auto">
                <div>
                  {safetytwo.map((item, key) => {
                    return (
                      <div style={{ height: "100%" }}>
                        <img
                          src={item.src}
                          alt="404 - Not Given"
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="mb-5">
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color">
                Training And Development
              </p>
              <p className="has-text-centered">
                Increase competence through training on technical, managerial
                and behavioural aspects
              </p>
            </div>
            <div>
              <p className="has-text-left">
                With the objective of filling gap between existing and desired
                pool of knowledge, skills and competence, regular training
                programmes are organised at all levels. We believe that with
                training and development programmes overall performance of the
                organization continually improves and hence its capability to
                satisfy internal and external customers.
              </p>
              <p className="has-text-centered has-text-weight-semibold blue_color mt-5">
                “Training and Development is a continual improvement procedure”
              </p>
            </div>
            <div className="mt-5">
              <Row>
                <Col
                  xxl={12}
                  lg={12}
                  md={24}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <div>
                    <Row>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <BiNotepad className="is-size-1 blue_color" />
                          <p>Behavioural Training</p>
                        </div>
                      </Col>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <BsShieldCheck className="is-size-1 blue_color" />
                          <p>Safety Training</p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <AiOutlineAudit className="is-size-1 blue_color" />
                          <p>Induction Training</p>
                        </div>
                      </Col>
                      <Col xxl={10} lg={10} md={12} sm={24} xs={24}>
                        <div className="project_box">
                          <BsCardChecklist className="is-size-1 blue_color" />
                          <p>Technical Training</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
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
                  <div>
                    {/* <Carousel
                      swipeable
                      autoPlay
                      infiniteLoop={true}
                      emulateTouch={true}
                      showArrows={false}
                      showThumbs={false}
                      showStatus={false}
                      interval={1000}
                      stopOnHover
                    > */}
                    {training.map((item, key) => {
                      return (
                        <div style={{ height: "100%" }}>
                          <img
                            src={item.src}
                            alt="404 - Not Given"
                            style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      );
                    })}
                    {/* </Carousel> */}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};
export default Standards;
