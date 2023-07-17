import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import Header from "../header/header";

const industriallist = [
  {
    src: "Sources/images/prouctlist/residential/ongoing/1-4.png",
    title: "Aranyam",
    content: "...",
    segment: "Residential",
    client: "Aaryan Developers",
    location: "Shilaj, Ahmedabad",
    projectSize: "1,861,168 Sq. ft.",
    projectYear: "2023-Current",
    architect: "AAA Architects",
    consultant: "HNBS Associates",
    scope: "RCC Frame works, Block work, Plaster work",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/2.jpg",
    title: "The Bellagio",
    content: "...",
    segment: "Residential",
    client: "Palak Group",
    location: "S. G. Highway, Ahmedabad",
    projectSize: "1,060,422 Sq. ft.",
    projectYear: "2023-Current",
    architect: "Studio Mansi Shah",
    consultant: "HNBS Associates",
    scope:
      "Construction of 02 Basement+ G.F + 2 Podium+ HP + 20 floors of Residential Building. ",
  },
  // {
  //   // src: "Sources/images/prouctlist/residential/ongoing/1.png",
  //   title: "Secuirty Housing for RIL",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Reliance Industries Ltd.",
  //   location: "Moti Khavdi, Jamnagar",
  //   projectSize: "115,000 Sq. ft.",
  //   projectYear: "2022-Current",
  //   architect: "PVDRS",
  //   consultant: "PVDRS",
  //   scope:
  //     "Civil works for RCC Core and Shell , waterproofing, masonry, all in-building MEP, interior finishing works",
  // },
  // {
  //   src: "Sources/images/prouctlist/residential/ongoing/1.png",
  //   title: "Secuirty Housing for RIL",
  //   content: "...",
  //   segment: "Residential",
  //   client: "Reliance Industries Ltd.",
  //   location: "Moti Khavdi, Jamnagar",
  //   projectSize: "36,338 Sq. ft.",
  //   projectYear: "2021-Current",
  //   architect: "PVDRS",
  //   consultant: "PVDRS",
  //   scope:
  //     "Civil works for RCC Core and Shell , waterproofing, masonry, all in-building MEP, interior finishing works",
  // },
  {
    src: "Sources/images/prouctlist/residential/ongoing/1-2.png",
    title: "Celeste@Godrej",
    content: "...",
    segment: "Residential",
    client: "Shree Siddhi Group",
    location: "Godrej Garden City, Ahmedabad",
    projectSize: "1,550,196 Sq. ft.",
    projectYear: "2022-Current",
    architect: "Placekinesis Associates",
    consultant: "Japan Shah Consulting Engineers",
    scope: "Civil works RCC Core Structure along with Masonry & Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/1-3.png",
    title: "Ikaria - Easy Living",
    content: "...",
    segment: "Residential",
    client: "Alinea Properties LLP",
    location: "Adani Shantigram",
    projectSize: "2,24,000 Sq. ft.",
    projectYear: "2022-Current",
    architect: "Studio ARA, Ahmedabad",
    consultant: "N K Shah Consulting LLP",
    scope: "Civil Structure (Core & Shell) and Finishing works.",
  },

  {
    src: "Sources/images/prouctlist/residential/ongoing/2.png",
    title: "GHARANA",
    content: "5 and 6 BHK Sky Villas of 22 floored structure.",
    segment: "Residential",
    client: "Sheetal Infrastructure",
    location: "Ambli, Ahmedabad",
    projectSize: "5,00,000 Sqft. (03 Basement + G.F + 21 Floors)",
    projectYear: "2022-Current",
    architect: "ADS Architect",
    consultant: "Ducon Consultants",
    scope:
      "Civil Structure work for D Wall, RCC works, Block work, Internal plaster, External Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/3.png",
    title: "OEUVRE - 2",
    content:
      "4 BHK spacious and luxurious apartments, the architectural design and modern amenities that Oeuvre-2 entails is remarkable.",
    segment: "Residential",
    client: "Madhav Oeuvre-2 LLP - Madhav Group",
    location: "Bodakdev, Amedabad",
    projectSize: "6,05,957 Sq. ft. (Four tower) (2B+GF+P-1+P-2+H.P,+22 Floors)",
    projectYear: "2022-Current",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope: "Setu Infrastructure",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/4.png",
    title: "VENUS PASHMINA",
    content: "4 and 5 BHK regal Appartments.",
    segment: "Residential",
    client: "Sarthi Prospace LLP- Venus Lifespace Creators",
    location: "Bodakdev, Amedabad",
    projectSize: "8,89,160 Sq. ft.(2B+G+2P+HP+19 Floors)",
    projectYear: "2022-Current",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Civil Structure work for D Wall, RCC works, Block work, Internal plaster, External Plaster",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/5.png",
    title: "SUN ATMOSPHERE",
    content: "Sun Atmosphere are 2 to 3 BHK Appartments And Retail at Shela.",
    segment: "Residential",
    client: "Sun Realty",
    location: "Shela, Ahmedabad",
    projectSize: "1,25,000 Sq. ft.(16 Blocks- 2B+G+14 Floors)",
    projectYear: "2022-Current",
    architect: "H M Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Civil Structure work for D Wall, RCC works, Block work, Internal plaster, External Plaster",
  },
];
const industrialcompleted = [
  {
    src: "Sources/images/prouctlist/residential/completed/12.jpeg",
    title: "Security Staff Housing",
    content:
      "Security Staff Housing Complex project at Jamnagar-LC 01, LC 04 and LC 10",
    segment: "Residential",
    client: "Reliance Industries Ltd",
    location: "Jamnagar",
    projectSize: "281,000 Sq. ft.",
    projectYear: "2020-2023",
    architect: "PVDRS, Ahmedabad",
    consultant: "PVDRS, Ahmedabad",
    scope:
      "Civil Structure work for RCC Core and Shell, Waterproofing, Masonry, all in-building MEP, interior finishing works",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/7.png",
    title: "THE WATERFALL",
    content:
      "The waterfall project by Armaan Infrastucture is a high-end luxurious apartment scheme constructed at Ambli Road",
    segment: "Residential",
    client: "Armaan Developer",
    location: "Ambli, Ahmedabad",
    projectSize: "4,55,000 Sqft.1 Building (4B+G+11 Floors)",
    projectYear: "2022",
    architect: "Scarlett Design",
    consultant: "Ducon Consultant Pvt Ltd",
    scope: "Civil Structure Work, Finishing And Services",
  },
  {
    src: "Sources/images/prouctlist/residential/ongoing/6.png",
    title: "ALPHABET A",
    content: "4 BHK, 5 BHK class-apart lifestyle apartments",
    segment: "Residential",
    client: "Jaydeep Buildcon LLP",
    location: "Bhat, Gandhinagar",
    projectSize: "1,00,000 Sq. ft.1 Building (B+G+9 Floors)",
    projectYear: "2022",
    architect: "9th Street Architects",
    consultant: "Bhoomi Consultants",
    scope:
      "Civil works for  Earthwork, Civil Structural Work, Block Masonry and Plaster ",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/1.png",
    title: "ARVIND AAVISHKAR",
    content:
      "Arvind Aavishkaar is a residential development constructed by Arvind Smartspaces.",
    client: "Arvind Smartspaces",
    location: "Naroda, Ahmedabad",
    projectSize: "6,10,000 Sqft. 6 Buildings (B+G+14 Floors)",
    projectYear: "2022",
    architect: "Jagrut And Partners LLP",
    consultant: "Alpha consultancy services",
    scope: "Civil Structure Work, Finishing And Services",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/2.png",
    title: "SUN SKY PARK",
    content:
      "Welcome to a new perspective to city living in Ahmedabad through Community, Central Park, Club, Homes, Penthouse etc.",
    client: "Shilp Developers - Sun Builders",
    location: "Ambli, Ahmedabad",
    projectSize: " 8,41,464 Sq. ft. (2B+G+22 Floors)",
    projectYear: "2020",
    architect: "Placekinesis Associates",
    consultant: "Setu Infrastructure",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster work, Plumbing and Electrical work, and Finishing Works of Residential Buildings of 2B+G+22 Storey (3 Blocks) and Commercial Building 2B+G+20 Storey.",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/3.png",
    title: "INDRAPRASTH GULMOHAR",
    content:
      "Indraprasth Gulmohar is a name that will make the difference between elite and everyone else.",
    client: "Deep Group",
    location: "Vastrapur, Ahmedabad",
    projectSize: "5,00,000 Sqft. 3 Buildings (2B+G+14 Floors)",
    projectYear: "2019",
    architect: "Hiren Patel Architects",
    consultant: "Setu Infrastructure",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster works of Residential Building of 2B+G+14 storey (3 Blocks). ",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/4.png",
    title: "THE BANYAN",
    content:
      "For the first time in Gujarat, Quintessentially, the world’s leading luxury lifestyle concierge service is now at ‘The Banyan’.",
    client: "Suryam Group",
    location: "Ashok Vatika, Bodakev, Ahmedabad",
    projectSize: "  2,10,000 Sqft. 2 Buildings (B+G+12 Floors)",
    projectYear: "2018",
    architect: "Design Module",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster work, Waterproofing and Finishing Works of Residential Building of B+G+12 Storey (2 Block).",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/5.png",
    title: "ONE49",
    content:
      "ONE49, an iconic high-rise residential development is one of the most sought after neighborhoods in Ahmedabad today.",
    client: "Amaya Properties Group",
    location: "Ambli, Ahmedabad",
    projectSize: "4,00,000 Sqft. 1 Building (2B+G+19 Floors)",
    projectYear: "2018",
    architect: "ONG AND ONGS",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Residential Building of 2B+G+19 Storey.",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/6.JPG",
    title: "SUN EVOQ",
    content:
      "The project offers residential units with top class specifications that meet the expectations of the lifestyle of the urban.",
    client: "Shilp Developers",
    location: "Bodakdev, Ahmedabad",
    projectSize: "1,25,000 Sqft. 1 Building (1B+G+13 Floors)",
    projectYear: "2017",
    architect: "MODO Designs",
    consultant: "Umang Patel",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster work, MEPF work, and Finishing Works of Residential Building of B+G+13 Storey.",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/7.png",
    title: "YASH ARIAN",
    content:
      "Yash Arian is a project with several modern amenities.It comes with a total of 204 spacious and luxurious apartments.",
    client: "Yash Arian Infra LLP",
    location: "Memnagar, Ahmedabad",
    projectSize:
      "4,50,000 Sqft. 2 Residential Buildings (2B+G+14 Floors) 1 Commercial Building (2B+G+4 Floors)",
    projectYear: "2017",
    architect: "Design Studio",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry and Plaster works of Commercial Building of 2B+G+4 Storey and of Residential Building 2B+G+14 Storey (2 Blocks).",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/8.png",
    title: "SLUM REHABILITATION",
    content:
      "A 2,10,000 Sqft project to help nearly 1200 families living in the slums of Amraiwadi with a one-BHK flat with good drainage and supply of drinking water.",
    client: "H N Safal",
    location: "Amraiwadi, Ahmedabad",
    projectSize: "2,10,000 Sqft.",
    projectYear: "2015",
    architect: "Design Module",
    consultant: "Design Module",
    scope: "Civil Structure Work, Finishing And Services",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/9.jpg",
    title: "APPLEWOODS",
    content:
      "The Applewoods township consists of 400 luxurious bungalows accommodated in a plush green environment occupied with open garden spaces, parks and lakes.",
    client: "Goyal Safal Developers",
    location: "Shela, Ahmedabad",
    projectSize: "9,00,000 Sqft. 10 Buildings (B+G+16 Floors)",
    projectYear: "2013",
    architect: "Apurva Amin",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope:
      "Civil Construction work of RCC Frame, Block Masonry Plaster work & Finishing Works of Residential Building of B+G+16 Storey (10 Blocks).",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/10.png",
    title: "SHALVIK SHUKAN",
    content:
      "Shalvik Shukan by Aakar Developers offers a total of 132 well-planned and world class residential units with top line specifications.",
    client: "Aakar Developers",
    location: "Vavol, Gandhinagar",
    projectSize: "3,00,000 Sqft.",
    projectYear: "2013",
    architect: "Neha Consultants",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "Civil Structure Work",
  },
  {
    src: "Sources/images/prouctlist/residential/completed/11.png",
    title: "SHALVIK HOMES",
    content:
      "Shalvik Homes by Aakar Developers offers 53 residential bungalows with common plots and play area.",
    client: "Aakar Developers",
    location: "Vavol, Gandhinagar",
    projectSize: "1,00,000 Sqft.",
    projectYear: "2010",
    architect: "Consultants",
    consultant: "N.K. Shah Consulting Engineers LLP",
    scope: "Civil Structure Work",
  },
];

const Residential = () => {
  const [isOngoing, setIsOngoing] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <>
      <img
        src="Sources/images/prouctlist/residential/1-1-1.JPG"
        alt="404 -Not Given"
        className="about_img"
      />
      <div className="projects-bg">
        <Header />
        <section className="residential py-5">
          <div className="container">
            <p className="is-size-1 has-text-weight-semibold has-text-centered blue_color is-uppercase">
              Residential Projects
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
            <div>
              <Row>
                {isOngoing &&
                  industriallist.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "700px" }}
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
                                  Location:&nbsp;
                                </span>
                                {item.location}
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
                  industrialcompleted.map((item, key) => {
                    return (
                      <Col xxl={8} lg={8} md={12} sm={24} xs={24}>
                        <div
                          className="property_list"
                          style={{ minHeight: "700px" }}
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
                              Residential
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
                                  Location:&nbsp;
                                </span>
                                {item.location}
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

export default Residential;
