import { Card, Col, Row } from "antd";
import Item from "antd/lib/list/Item";
import React from "react";
import { BsHouse } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { GiTeePipe } from "react-icons/gi";
import { BiDonateHeart } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { DiStreamline } from "react-icons/di";
import { BsGraphUp } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";
// import { PieChart } from "react-minimal-pie-chart";

const coremanagment = [
  {
    src: "Sources/images/management/team/1.png",
    corename: "Munir Shah",
    coredes: "Co-founder",
    coreedu: "(B.Tech, Civil, CEPT)",
    corepara:
      "Having 29+ years of rich experience in management and execution of civil construction , he has utilized his expertise and innovative technologies to achieve excellent quality of works in every project within agreed time schedule. His integrity, knowledge and business ethics has taken this company to the remarkable position in construction industry. His responsiveness and the way to conduct the business is appreciable.",
  },
  {
    src: "Sources/images/management/team/2.png",
    corename: "Tejas Dalal",
    coredes: "Co-founder",
    coreedu: "(M.S, Civil, USA)",
    corepara:
      "He is technically very competent and highly professional. Having more than 29+ years of experience in management and execution of civil construction, including 5 years of experience in USA. Armed with an international exposure of best practices and latest know-how, his dream has been to transform the perception of construction businesses in India by making Hitech the symbol of professional integrity.",
  },
  // {
  //   src: "Sources/images/management/team/3.png",
  //   corename: "Manish Dave",
  //   coredes: "COO",
  //   coreedu: "(B.E, Civil, PGDM)",
  //   corepara:
  //     "With over 31+ years of experience in the Construction Industry, he currently handles construction operations and spearheads the development and implementation of systems at Hitech. He has experience of handling project planning, budgeting, execution and monitoring functions. His previous stints include senior positions at JMC Projects (India), Kalpataru Power Transmission and ITD Cementation across various functions",
  // },
  {
    src: "Sources/images/management/team/4.png",
    corename: "Viral Shah",
    coredes: "DGM",
    coreedu: "(B.E Civil)",
    corepara:
      "He is having beyond 25+ years of rich experience in execution of residential, commercial and industrial civil construction. During his tenure he has worked with reputed companies like JMC, K Raheja corp., Arvind Group. etc. He is associated with Hitech since last six years. He is technically sound along with expertise to execute project in time as well as with good quality. His strong network helps company to enhance resources as well as fast mobilization of project.",
  },
  {
    src: "Sources/images/management/team/5.png",
    corename: "Jaydip Patel",
    coredes: "AGM",
    coreedu: "(B.E Civil)",
    corepara:
      "He is having more than 23+ years of rich experience in execution of Industrial, Institutional and large scale high end residential projects. Each projects executed by him are monuments for our company. He is associated with Hitech since 2008. His knowledge and expertise of finishing creates a different benchmarks. His strong knowledge of project planning helps to complete all projects on time.",
  },
];
const managementcard = [
  {
    icon: <FaIndustry className="is-size-1 service_mainicon" />,
    title: "Leadership",
    des: "Investing in our people to meet our enterprise needs while delivering outstanding results for our customers.",
  },
  {
    icon: <GiTeePipe className="is-size-1" />,
    title: "Accountability",
    des: "Holding ourselves and our colleagues at all levels accountable for meeting commitments.",
  },
  {
    icon: <BsHouse className="is-size-1" />,
    title: "Competence",
    des: "We believe right skills can deliver better results hence we strive to depute right person at right job.",
  },
];
const corevaluescard = [
  {
    icon: <BsGraphUp className="is-size-1" />,
    title: " CONTINUAL IMPROVEMENT",
    des: "  We focus on optimizing every process in our company by focusing on those activities that generate the most value for our clients and stakeholders, while removing as many redundancies as possible. We continuously strive to improve our construction technology, our equipment, our standards of excellence , our process methodologies. We take continuous actions to build competence levels and skill sets of our people.",
  },
  {
    icon: <VscWorkspaceTrusted className="is-size-1" />,
    title: "TRUST",
    des: "We deliver what we have committed to our clients as per timelines and as per agreed quality and safety standards. Trust means we accept people for who they are and trust them to perform their role as required.",
  },
  {
    icon: <BiDonateHeart className="is-size-1" />,
    title: "CARING",
    des: "We feel genuine concern, kindness for others and express ourselves through caring actions. Even if we have to take tough decisions they are carried out in a manner that demonstrates our care and respect for the other person.",
  },
  {
    icon: <GrOptimize className="is-size-1 blue_color" />,
    title: "ACCOUNTABILITY",
    des: "Each and every one of us is willing to accept and own our individual responsibilities and account for our actions. At the same time we ensure that collectively as a team, we hold each and every member of the team responsible for their actions towards achievement of common goals.",
  },
  {
    icon: <DiStreamline className="is-size-1" />,
    title: "SYSTEMIC APPROACH",
    des: "All our actions are well planned, standard operating practices are defined, all business processes are streamlined, having integrated systems in place for all activities for smooth co-ordination between projects and functions. We incorporate proven practices, software supported systems and technology in all our functional processes.",
  },
];

const Management = () => {
  return (
    <>
      <div className="about-us-bg">
        <section>
          <div className="section_padding"></div>
          <div className="container">
            <div>
              <div className="sectional_heading">
                <p className="is-size-2 has-text-weight-semibold pt-3 blue_color has-text-centered">
                  Core Management
                </p>
              </div>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                {coremanagment.map((item, key) => {
                  return (
                    <Col
                      xxl={12}
                      lg={12}
                      md={12}
                      sm={24}
                      xs={24}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <div className="core_box" style={{backgroundColor: "#fff"}}>
                        <div className="core_img">
                          <img src={item.src} alt="404 - Not Given" />
                        </div>
                        <div>
                          <p className="is-size-4 has-text-centered has-text-weight-semibold">
                            {item.corename}
                          </p>
                          <p className="is-size-5 has-text-centered">
                            {item.coredes}
                          </p>
                          <p className="is-size-6 has-text-centered mb-3">
                            {item.coreedu}
                          </p>
                          <p className="has-text-left">{item.corepara}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="sectional_heading">
              <p className="is-size-2 has-text-weight-semibold pt-3 blue_color has-text-centered">
                Our Team
              </p>
            </div>
            <div className="mt-3">
              <Row>
                <Col
                  xxl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <p className="has-text-left">
                    Hitech's team shares the same common values as their
                    clients: Service, Detail, Experience, Integrity, and
                    Quality. Our team has been recognized as collaborators and
                    individuals for excellence in construction, thought
                    leadership, and professional growth. Without our team, we
                    wouldn't be here today.
                  </p>
                  <br />
                  <p className="has-text-left">
                    Our Family consists of: Engineers & Supervisors: 48% Plant
                    and Machinery Staff: 18% Top Management: 5% Managers &
                    Above: 10% Supporting Staff: 19%
                  </p>
                </Col>
                <Col xxl={1} lg={1} md={0} sm={0} xs={0}></Col>
                <Col
                  xxl={11}
                  lg={11}
                  md={12}
                  sm={24}
                  xs={24}
                  className="my-auto"
                >
                  <div>
                    <img
                      src="Sources/images/management/team.png"
                      alt="404 - Not Given"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="section_padding"></div>
        </section>

        <section className="bluebg_color mobile_margin">
          <div className="section_padding"></div>
          <div className="container">
            <div className="core_value">
              <p className="is-size-2 has-text-weight-semibold has-text-centered has-text-white mb-2">
                Our Core Values
              </p>
              <p className="is-size-5 has-text-centered has-text-white mb-5">
                Our core values define who we are and what we stand for as a
                company. Value-driven companies achieve better brand and
                business performance. Our core values form an integral part of
                our work culture, giving our clients a unique experience of
                trust. We have built our company around following 5 core values.
              </p>
            </div>
            <div>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                {corevaluescard.map((item, key) => {
                  return (
                    <Col
                      xxl={8}
                      lg={12}
                      md={24}
                      sm={24}
                      xs={24}
                      className="my-auto"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card className="management_card">
                        <div className="has-text-centered management_icon">
                          {item.icon}
                        </div>
                        <div className="management_content">
                          <p className="is-size-4 has-text-weight-semibold has-text-centered is-uppercase has-text-white">
                            {item.title}
                          </p>
                          <p className="is-size-5 has-text-left mt-4">
                            We focus on optimizing every process in our company
                            by focusing on those activities that generate the
                            most value for our clients and stakeholders, while
                            removing as many redundancies as possible. We
                            continuously strive to improve our construction
                            technology, our equipment, our standards of
                            excellence , our process methodologies. We take
                            continuous actions to build competence levels and
                            skill sets of our people.
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

      {/* <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
              Our Core Values
            </p>
            <p className="is-size-5 has-text-centered mb-5">
              Our core values define who we are and what we stand for as a
              company. Value-driven companies achieve better brand and business
              performance. Our core values form an integral part of our work
              culture, giving our clients a unique experience of trust. We have
              built our company around following 5 core values.
            </p>
          </div>
          <div>
            <Row>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <PieChart
                  data={[
                    {
                      title: "CONTINUAL IMPROVEMENT",
                      value: 20,
                      color: "#E38627",
                    },
                    { title: "TRUST", value: 20, color: "#C13C37" },
                    { title: "CARING", value: 20, color: "#01949a" },
                    {
                      title: "ACCOUNTABILITY",
                      value: 20,
                      color: "#99c24d",
                    },
                    { title: "SYSTEMIC APPROACH", value: 20, color: "#6A2135" },
                  ]}
                  paddingAngle="5"
                  animate={true}
                  animationDuration="300ms"
                  radius="30"
                />
              </Col>
              <Col xxl={12} lg={12} md={24} sm={24} xs={24} className="my-auto">
                <div className="pl-4">
                  <p className="is-size-4 has-text-weight-semibold blue_color mb-2">
                    CONTINUAL IMPROVEMENT
                  </p>
                  <p className="has-text-left">
                    We focus on optimizing every process in our company by
                    focusing on those activities that generate the most value
                    for our clients and stakeholders, while removing as many
                    redundancies as possible. We continuously strive to improve
                    our construction technology, our equipment, our standards of
                    excellence , our process methodologies. We take continuous
                    actions to build competence levels and skill sets of our
                    people.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section_padding"></div>
      </section> */}

      <section className="mobile_margin">
        <div className="section_padding"></div>
        <div className="container">
          <div>
            <p className="is-size-2 has-text-weight-semibold has-text-centered blue_color mb-2">
              Getting the Right People Together
            </p>
            <p className="is-size-4 has-text-centered mb-5 has-text-weight-semibold">
              Hitech has always believed in building an inclusive and diverse
              culture where colleagues feel valued, challenged, motivated, and
              treated fairly by nurturing :-
            </p>
          </div>
          <div>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              {managementcard.map((item, key) => {
                return (
                  <Col
                    xxl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card className="servicecard">
                      <div className="has-text-centered service_icon">
                        <div className="icon_border">{item.icon}</div>
                      </div>
                      <div>
                        <p className="is-size-4 has-text-weight-semibold has-text-centered is-uppercase service_title mt-3">
                          {item.title}
                        </p>
                        <p className="is-size-5 has-text-left mt-4">
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
    </>
  );
};

export default Management;
