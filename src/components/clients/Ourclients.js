import React from "react";
import { Col, Row } from "antd";
import Header from "../header/header";
const clientlist = [
  { src: "Sources/images/our_client/1.png" },
  { src: "Sources/images/our_client/2.png" },
  { src: "Sources/images/our_client/3.png" },
  { src: "Sources/images/our_client/4.png" },
  { src: "Sources/images/our_client/5.png" },
  { src: "Sources/images/our_client/6.png" },
  { src: "Sources/images/our_client/7.png" },
  { src: "Sources/images/our_client/8.png" },
  { src: "Sources/images/our_client/9.png" },
  { src: "Sources/images/our_client/10.png" },
  { src: "Sources/images/our_client/11.png" },
  { src: "Sources/images/our_client/12.png" },
  { src: "Sources/images/our_client/13.png" },
  { src: "Sources/images/our_client/14.png" },
  { src: "Sources/images/our_client/15.png" },
  { src: "Sources/images/our_client/16.png" },
  { src: "Sources/images/our_client/17.png" },
  { src: "Sources/images/our_client/18.png" },
  { src: "Sources/images/our_client/19.png" },
  { src: "Sources/images/our_client/20.png" },
  { src: "Sources/images/our_client/21.png" },
  { src: "Sources/images/our_client/22.png" },
  { src: "Sources/images/our_client/23.png" },
  { src: "Sources/images/our_client/24.png" },
  { src: "Sources/images/our_client/25.png" },
  { src: "Sources/images/our_client/26.png" },
  { src: "Sources/images/our_client/27.png" },
  { src: "Sources/images/our_client/28.png" },
  { src: "Sources/images/our_client/29.png" },
  { src: "Sources/images/our_client/30.png" },
  { src: "Sources/images/our_client/31.png" },
  { src: "Sources/images/our_client/32.png" },
  { src: "Sources/images/our_client/33.png" },
  { src: "Sources/images/our_client/34.png" },
  { src: "Sources/images/our_client/35.png" },
  { src: "Sources/images/our_client/36.png" },
  { src: "Sources/images/our_client/37.png" },
  { src: "Sources/images/our_client/38.png" },
  { src: "Sources/images/our_client/39.png" },
  { src: "Sources/images/our_client/40.png" },
  { src: "Sources/images/our_client/41.png" },
  { src: "Sources/images/our_client/42.png" },
];
const Ourclients = () => {
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
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
                Our Clients
              </p>
              <p className="is-size-6 has-text-centered mb-3">
                We work closely with a wide range of clients from different
                sectors and regions. These are just some of the people we're
                proud to work with:
              </p>
            </div>
            <Row>
              {clientlist.map((item, key) => {
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

export default Ourclients;
