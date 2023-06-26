import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import Header from "../header/header";

// const institutionalprojectslist = [
//   {
//     src: "Sources/images/prouctlist/Institutional_projects/ongoing/1.png",
//     title: "JITO HOSTEL",
//     content:
//       "Hostel building work for Jain International Trade organisation-An Educational Trust",
//     segment: "Residential",
//     client: "JITO Ahmedabad Educational Trust",
//     projectSize: "37,200 Sq. ft. ( B+G+5 Floors)",
//     projectYear: "2022-Current",
//     architect: "PVDRS, Ahmedabad",
//     consultant: "P-CUBE Consultant",
//     scope: "Civil Structure work for RCC Core and Shell work",
//   },
//   {
//     src: "Sources/images/prouctlist/Institutional_projects/ongoing/2.png",
//     title: "MUSEUM KOBA",
//     content:
//       "The Museum- Samrat Samprati Sangrahalaya of Shri Mahavir Jain Aradhana Kendra,Koba preserves and nourishes the rare heritage of Jain Art and architecture",
//     segment: "Corporate",
//     client: "Shri Mahavir Jain Aradhana Kendra, Koba (SMJAK Trust)",
//     projectSize: "1,00,000 Sqft.",
//     projectYear: "2022-Current",
//     architect: "SJK Architects",
//     consultant: "Global Engineering Services",
//     scope: "RCC, Masonary, Plaster",
//   },
// ];
const institutionalprojectscompleted = [
  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/1.png",
    title: "JITO HOSTEL",
    content:
      "Hostel building work for Jain International Trade organisation-An Educational Trust",
    segment: "Residential",
    client: "JITO Ahmedabad Educational Trust",
    projectSize: "37,200 Sq. ft. ( B+G+5 Floors)",
    projectYear: "2022",
    architect: "PVDRS, Ahmedabad",
    consultant: "P-CUBE Consultant",
    scope: "Civil Structure work for RCC Core and Shell work",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/ongoing/2.png",
    title: "MUSEUM KOBA",
    content:
      "The Museum- Samrat Samprati Sangrahalaya of Shri Mahavir Jain Aradhana Kendra,Koba preserves and nourishes the rare heritage of Jain Art and architecture",
    segment: "Corporate",
    client: "Shri Mahavir Jain Aradhana Kendra, Koba (SMJAK Trust)",
    projectSize: "1,00,000 Sqft.",
    projectYear: "2022",
    architect: "SJK Architects",
    consultant: "Global Engineering Services",
    scope: "RCC, Masonary, Plaster",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/1.png",
    title: "LUBI CORPORATE",
    content: "Corporate office at Tragad, Ahmedabad",
    segment: "Corporate",
    client: "Lubi Industries LLP",
    projectSize: "1,68,400 Sq. ft. (2B+G+7 Floors)",
    projectYear: "2022",
    architect: "DSP Design Associates",
    consultant: "KMH Engineering",
    scope:
      "Civil Structure works with R.C.C. frame structure, A.A.C. Block Masonry, Cement Plaster work",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/2.png",
    title: "ANAND NIKETAN SCHOOL",
    content:
      "Anand Niketan is a School having 50,000 Sqft built up area in Sughad, Ahmedabad with various facilities including Special Room, Sports Arenas & Activity Rooms.",
    segment: "Education",
    client: "Anand Niketan",
    projectSize: "50,000 Sqft.",
    projectYear: "2015",
    architect: "Kakani Associates",
    consultant: "Himanshu Parikh Consulting Engineers",
    scope: "Civil Structure Work, Finishing & Services",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/3.png",
    title: "NARAYANA HRUDALAYA HOSPITAL",
    content: "NARAYANA HRUDALAYA HOSPITAL",
    segment: "Healthcare",
    client: "Narayana Hrudalaya Hospital",
    projectSize: "2,00,000 Sqft.",
    projectYear: "2011",
    architect: "Shapoorji Pallonji & Co. Ltd, Umesh & Co.",
    consultant: "Umesh & Co",
    scope: "Civil Structure Work",
  },
  {
    src: "Sources/images/prouctlist/Institutional_projects/completed/4.png",
    title: "PAREKHS HOSPITAL",
    content:
      "Parekhs Hospital is one of leading hospitals located in Ahmedabad, Gujarat with an area of 30,000 Sq Ft designed by Alpa Kamdar and Snehal Mehta.",
    segment: "Healthcare",
    client: "Dr Ketu Parekh",
    projectSize: "30,000 SQFT.",
    projectYear: "2006",
    architect: "Alap Kamdar",
    consultant: "Alap Kamdar",
    scope: "Civil Structure Work & Finishing",
  },
];

const Institutionalprojects = () => {
  const [isOngoing, setIsOngoing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(true);

  return (
    <>
      <img
        src="Sources/images/bg/a7.jpg"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />
        <section className="residential py-5">
          <div className="container">
            <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
              Institutional And Corporate Projects
            </p>
            <div>
              <Row>
                {/* <Col>
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
              </Col> */}
                <Col>
                  <p
                    className="is-size-5 has-text-weight-semibold blue_color mb-2 is-uppercase completed-projects"
                    onClick={() => {
                      setIsOngoing(false);
                      setIsCompleted(true);
                    }}
                    style={{
                      borderBottom: isCompleted ? "2px solid #0d2e61" : "none",
                    }}
                  >
                    Completed
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section className="residential pt-0">
          <div className="container">
            {/* <div>
            <Row>
              {isOngoing && institutionalprojectslist.map((item, key) => {
                return (
                  <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                    <div className="property_list">
                      <div className="propertylist_image">
                        <Image src={item.src} alt="404 - Not Given" />
                      </div>

                      <div className="propertylist_content p-4">
                        <div className="pt-2">
                          <p className="is-size-4 has-text-centered blue_color has-text-weight-semibold">
                            {item.title}
                          </p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">{item.content}</p>
                        </div>
                        <div className="pt-3">
                          <p className="is-size-6">
                            <span className="has-text-weight-semibold">
                              Segment:&nbsp;
                            </span>
                            {item.segment}
                          </p>
                        </div>
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
          </div> */}

            <div>
              <Row>
                {isCompleted &&
                  institutionalprojectscompleted.map((item, key) => {
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
                          </div>
                          <div className="pt-3">
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

export default Institutionalprojects;
