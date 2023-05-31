import { Card, Col, Image, Row } from "antd";
import React from "react";

const awardscard = [
  {
    src: "Sources/images/awards/3.png",
    title: "Outstanding Structure",
    des: "Project “THE BANYAN” was awarded for Outstanding Structure at State Level in Mass Housing category ( < 100)",
  },
  {
    src: "Sources/images/awards/2.png",
    title: "Outstanding Structure",
    des: "Project “HIGH TEMP FURNACES” was awarded for Outstanding Structure at Regional Level North Gujarat in Industrial category",
  },
  {
    src: "Sources/images/awards/1.png",
    title: "Outstanding Structure",
    des: "Project “SUN EVOQ” was awarded for Outstanding Structure at Regional Level North Gujarat in Mass Housing category ( < 100)",
  },
  {
    src: "Sources/images/awards/5.png",
    title: "Safety Award",
    des: "Received award/certificate from Ahmedabad one mall for achieving 1 lakh safe man hours without LTI",
  },
  {
    src: "Sources/images/awards/6.png",
    title: "Safety Award",
    des: "Received award/certificate from CQRA for achieving 1 million safe man hours without LTI at one 49 site",
  },
];

const Awards = () => {
  return (
    <>
      <div className="about-us-bg">
        <section>
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-5">
                Awards And Certifications
              </p>
              {/* <p className="is-size-4 has-text-centered mb-3">Year 2020</p> */}
              <p className="is-size-5 has-text-centered mt-3">
                {/* Our company has been felicitated with the Indian Concrete
              Institute-Ultra Tech Outstanding Structure Awards 2020 at State
              And Regional Level. */}
                The many talented and devoted workers at Hitech are responsible
                for the numerous awards and recognition <br />
                we have received throughout the years.
              </p>
            </div>
            <div>
              <img src="Sources/images/awards/4.png" alt="404 - Not Found" />
            </div>
            <div>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                {awardscard.map((item, key) => {
                  return (
                    <Col
                      xxl={8}
                      lg={8}
                      md={12}
                      sm={24}
                      xs={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card className="awardcard">
                        <div className="has-text-centered service_icon">
                          <div>
                            <Image src={item.src} alt="404 - Not Found" />
                          </div>
                        </div>
                        <div>
                          <p className="is-size-5 has-text-weight-semibold has-text-centered mt-4 blue_color">
                            {item.title}
                          </p>
                          <p className="is-size-5 has-text-justified mt-4">
                            {item.des}
                          </p>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>
      </div>
    </>
  );
};

export default Awards;
