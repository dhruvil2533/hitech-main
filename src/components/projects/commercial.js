import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import Header from "../header/header";

const commerciallist = [
  {
    src: "Sources/images/prouctlist/commercial/ongoing/1.png",
    title: "SHARNAM METROLINK",
    content: "Commercial projects at Khokhara, Ahmedabad",
    client: "Sharnam Metrolinks LLP",
    projectSize:
      "4,91,000 Sq. ft. 7 Buildings (B+G+4 Floors) 2 Buildings (B+G+5 Floors)",
    projectYear: "2022-Current",
    architect: "99 Studio",
    consultant: "S3M Design Consultants LLP",
    scope:
      "Civil Structure work for RCC works, Block work, Internal Plaster, External Plaster, Flooring,Waterproofing And Painting works",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/2.png",
    title: "TORRENT POWER “B” STATION",
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center (PSC), Customer service (CS), Plug point and other applied work at 'B' station premises, Katargam Surat.",
    client: "Torrent Power Ltd",
    projectSize: "1,11,000 SQFT.",
    projectYear: "2022-Current",
    architect: "Munjal Bhatt",
    consultant: "S3M Design Consultants LLP",
    scope: "Civil Structure Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/3.png",
    title: "TORRENT POWER 'E' STATION",
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its Power supply center, TSD Workshop, Plug point and other applied work at 'E' station premises, Varachha Surat.",
    client: "Torrent Power Ltd",
    projectSize: "50,000 SQFT.",
    projectYear: "2022-Current",
    architect: "Munjal Bhatt",
    consultant: "S3M Design Consultants LLP",
    scope: "Civil Structure Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/4.png",
    title: "TORRENT POWER LTD. NARANPURA",
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its HT PSC building and meter Lab building at Naranpura, Ahmedabad.",
    client: "Torrent Power Ltd",
    projectSize: "1,70,000 SQFT.",
    projectYear: "2022-Current",
    architect: "Munjal Bhatt",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "Civil Structure Work with all services",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/5.png",
    title: "TORRENT POWER LTD. ODHAV",
    content:
      "Torrent power, one of the largest integrated private sector power utilities in the country, is coming up with its PSC building And Plug point building at Odhav.",
    client: "Torrent Power Ltd",
    projectSize: "1,10,000 SQFT.",
    projectYear: "2022-Current",
    architect: "Munjal Bhatt",
    consultant: " Ducon Consultant Pvt Ltd",
    scope: "Civil Structure Work with all services",
  },
  {
    src: "Sources/images/prouctlist/commercial/ongoing/6.png",
    title: "WEST GATE 'E' BLOCK",
    client: "AADHAN BUILDERS LLP.",
    projectSize: "35,000 SQFT. (3B+GF +07 Floors)",
    projectYear: "2022-Current",
    architect: "ADS Architects Pvt Ltd",
    consultant: "-",
    scope: "Civil Structure Work with all services",
  },
];
const commercialcompleted = [
  {
    src: "Sources/images/prouctlist/commercial/completed/1.png",
    title: "AHMEDABAD ONE MALL-II",
    content:
      "Ahmedabad One mall (Nexus Malls, A group of Blackstone), is the city's iconic shopping destination and it entered into constructing phase2 building with wellknown F&B and Retail brands.",
    segment: "Corporate",
    client: "Ruchi Malls Pvt. Ltd.",
    projectSize: " 2,00,000 Sqft. 1 Building (2B+G+4 Floors)",
    projectYear: "2022",
    architect: "Bentel Associates",
    consultant: "TPC Technical Projects Consultants",
    scope: "Demolition , Retrofitting and Civil Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/2.png",
    title: "KP EPITOME",
    content:
      "KP Epitome is a commercial development, providing perfectly built work spaces and commercial shops having 3 towers of 2B+G+14 And 8 towers of 2B+G+3.",
    segment: "Commercial",
    client: "Kish Developers",
    projectSize:
      "6,50,000 Sqft. 2 Buildings (2B+G+14 Floors) 8 Buildings (2B+G+3 Floors)",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "P Cube Consultant",
    scope: "Civil Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/3.png",
    title: "SUN WEST BANK",
    content:
      "Sun Westbank is one of the commercial developments offering spacious and skillfully designed office spaces and commercial shops.",
    segment: "Commercial",
    client: "Nirguna Infrastructure LLP",
    projectSize: "6,50,000 Sqft. 2 Buildings (3B+G+13 Floors)",
    projectYear: "2021",
    architect: "HM Architect",
    consultant: "SETU Infrastructure",
    scope: "Civil Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/4.png",
    title: "SHARNAM SOLITAIRE",
    content:
      "A world class business centre designed to harness opportunities with its 3 Towers comprising of 1B+G+4 measuring upto a total of 2,80,000 sq ft.",
    segment: "Commercial",
    client: "Sharnam Solitaire LLP",
    projectSize: "2,25,000 Sqft. 3 Buildings (B+G+4 Floors)",
    projectYear: "2021",
    architect: "99 Studio",
    consultant: "Millimeter Designs",
    scope: "Civil Work with Finishes",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/5.png",
    title: "SHARNAM SMART SPACE",
    content:
      "A world class business centre designed to harness opportunities with its five Towers comprising of 2B+G+4 measuring upto a total of 4,25,000 sq ft.",
    segment: "Commercial",
    client: "Sharanam Smartspace LLP",
    projectSize: "4,25,000 Sqft. 4 Buildings (B+G+4 Floors)",
    projectYear: "2019",
    architect: "99 studio",
    consultant: "Millimeter designs",
    scope: "Civil Structure Work And Finishing",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/6.png",
    title: "WESTGATE D BLOCK",
    content:
      "Westgate brings all the goodness from the heavenly powers to its occupants, a 20 storey building with 70 mt. height, 8 high speed Mitsubishi lifts and ample car parking.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd.",
    projectSize: "4,85,000 Sqft. 1 Building (3B+G+23 Floors)",
    projectYear: "2019",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "Civil Structure Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/7.png",
    title: "SHIVALIK SHILP II",
    content:
      "Shivalik Shilp II, a magnificient architecture for the city is a perfect commercial place near Keshavbaug, Ahmedabad having 588 sqft of offices and 2289 sqft of showrooms.",
    segment: "Commercial",
    client: "Shilp Developers",
    projectSize: "4,72,000 Sqft. 1 Building (3B+G+13 Floors)",
    projectYear: "2019",
    architect: "INI Design Studio",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "Civil Structure Work And Finishing",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/8.png",
    title: "RATNAAKAR NINE SQUARE",
    content:
      "Experience a fully furnished business center enabled with the best of form and function, to deliver everything you need.",
    segment: "Commercial",
    client: "NCLP Infracon LLP",
    projectSize: "6,00,000 Sqft. 2 Buildings (3B+G+13 Floors)",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "Civil Structure Work, Masonry And Plaster",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/9.png",
    title: "WESTGATE BUSINESS BAY",
    content:
      "Spread across two towers, Westgate Business Bay is a sought-after commercial project loaded with all the conveniences.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd.",
    projectSize: "5,36,000 Sqft. 1 Building (2B+G+16 Floors)",
    projectYear: "2018",
    architect: "ADS Architect Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "Civil Structure Work",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/10.png",
    title: "YASH ARIAN",
    content:
      "Yash Arian comes with a total of 204 luxurious apartments measuring 4,50,000 Sq ft designed by Perkins Eastman, US.",
    segment: "Commercial",
    client: "Yash Arian Infra LLP",
    projectSize:
      "4,50,000 Sqft. 2 Residential Buildings (2B+G+14 Floors) 1 Commercial Building (2B+G+4 Floors)",
    projectYear: "2017",
    architect: "Design Studio",
    consultant: "Design Studio",
    scope: "N.K. Shah Consulting Engineers LLP",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/11.png",
    title: "SUMEL 8",
    content:
      "Well designed by H N Safal, Sumel 8 shelters 11 high rise towers with 1983 units that are highly impressive.",
    segment: "Commercial",
    client: "H N Safal",
    projectSize: "16,00,000 Sqft. 11 Commercial buildings (B+G+5 Floors)",
    projectYear: "2017",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "Civil Structure Work, Finishing And Services",
  },
  {
    src: "Sources/images/prouctlist/commercial/completed/12.png",
    title: "WESTGATE",
    content:
      "Conceptualized by True Value Nirman, West Gate, Ahmedabad, Gujarat offers a total of 273 fully functional commercial offices with ultra-modern facilities.",
    segment: "Commercial",
    client: "Aadhan Builders Pvt Ltd",
    projectSize: "5,00,000 Sqft.",
    projectYear: "2014",
    architect: "ADS Architects Pvt Ltd",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "Civil Structure Work",
  },
];

const Commercial = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <img
        src="Sources/images/bg/a10.jpg"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />

        <div className="projects-bg">
          <section className="residential py-5">
            <div className="container">
              <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
                Commercial Projects
              </p>
              <div>
                <Row>
                  <Col>
                    <p
                      className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase ongoing-projects"
                      onClick={() => {
                        setIsCompleted(false);
                        setIsOngoing(true);
                      }}
                      style={{
                        borderBottom: isOngoing ? "2px solid #0d2e61" : "none",
                      }}
                    >
                      Ongoing
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase completed-projects"
                      onClick={() => {
                        setIsOngoing(false);
                        setIsCompleted(true);
                      }}
                      style={{
                        borderBottom: isCompleted
                          ? "2px solid #0d2e61"
                          : "none",
                      }}
                    >
                      Completed
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </div>

        <section className="residential projects-bg pt-0">
          <div className="container">
            <div>
              <Row>
                {isOngoing &&
                  commerciallist.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "650px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given" />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div> */}
                            {/* <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            Commercial
                          </p>
                        </div> */}
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Client:&nbsp;
                                </span>
                                {item.client}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Size:&nbsp;
                                </span>
                                {item.projectSize}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Year:&nbsp;
                                </span>
                                {item.projectYear}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Architect:&nbsp;
                                </span>
                                {item.architect}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Str. Consultant:&nbsp;
                                </span>
                                {item.consultant}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Scope:&nbsp;
                                </span>
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
            <div>
              <Row>
                {isCompleted &&
                  commercialcompleted.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "650px" }}
                        >
                          <div className="propertylist_image">
                            <Image src={item.src} alt="404 - Not Given" />
                          </div>

                          <div className="propertylist_content p-4">
                            <div className="pt-2">
                              <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                                {item.title}
                              </p>
                            </div>
                            {/* <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div> */}
                            {/* <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            {item.segment}
                          </p>
                        </div> */}
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Client:&nbsp;
                                </span>
                                {item.client}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Size:&nbsp;
                                </span>
                                {item.projectSize}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Project Year:&nbsp;
                                </span>
                                {item.projectYear}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Architect:&nbsp;
                                </span>
                                {item.architect}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Str. Consultant:&nbsp;
                                </span>
                                {item.consultant}
                              </p>
                            </div>
                            <div className="pt-3">
                              <p className="is-size-6">
                                <span className="has-text-weight-semibold">
                                  Scope:&nbsp;
                                </span>
                                {item.scope}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Commercial;
