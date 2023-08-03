import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Reference Books</h2>
              <p>
              In this carefully curated collection, we have handpicked the best interview books to equip you with the knowledge and skills needed to excel in any interview scenario. Whether you are a recent graduate stepping into the professional world or an experienced professional seeking a career change, these books cater to all levels of experience and industries.!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={25} duration={2} suffix="K" /> */}
                    </span>

                   
                    <a href="https://www.amazon.com/gp/product/157766020X/ref=as_li_tl?ie=UTF8&tag=psihtd-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=157766020X&linkId=299ca6cba46b5bf2fd02da90853cd211" className="counter__title">
                    Basic Interviewing Skills
                </a>
                  </div>
                                <div className="single__counter">
                <span className="counter">
                  {/* <CountUp start={0} end={12} duration={2} suffix="M" /> */}
                </span>

                <a href="https://www.amazon.com/gp/product/B0065KC3KE/ref=as_li_tl?ie=UTF8&tag=psihtd-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0065KC3KE&linkId=1f4cde8d4525d4911aa55275e19c34f3" className="counter__title">
                  Success in Interviews: How To Succeed in Any Job
                </a>
              </div>

                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={95} duration={2} suffix="M" /> */}
                    </span>

                   
                    <a href="https://www.amazon.com/gp/product/0143128507/ref=as_li_tl?ie=UTF8&tag=psihtd-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0143128507&linkId=9e6dd2e3ca899a42d67ee36099af8ff4" className="counter__title">
                    60 Seconds and You’re Hired
                </a>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      {/* <CountUp start={0} end={5} duration={2} suffix="K" /> */}
                    </span>

                    
                    <a href="https://www.amazon.com/gp/product/0692209395/ref=as_li_tl?ie=UTF8&tag=psihtd-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0692209395&linkId=5044c7781167223a6070162a9a00a17e" className="counter__title">
                    Interview Like A Boss
                </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
