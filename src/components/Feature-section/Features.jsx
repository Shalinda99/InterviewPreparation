import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "General Rules for What to Wear to an Interview",
    desc: "Dressing appropriately for an interview is essential to make a positive and lasting impression. Regardless of the industry. For both males and females, opting for conservative and neutral colors is a safe choice!",
    icon: "ri-draft-line",
  },

  {
    title: "What Not to Wear to an Interview (Ever)",
    desc: "When preparing for an interview, it's equally crucial to know what to avoid wearing to ensure a positive first impression. Steer clear of overly casual attire, such as jeans, t-shirts, and sneakers, as they can undermine your professionalism!",
    icon: "ri-discuss-line",
  },

  {
    title: "What to Wear to an Interview: Ideas for Men & Women ",
    desc: "Dress professionally & confidently. Men: Tailored suit, shirt, tie, dress shoes. Women: Blouse, skirt/trousers, closed-toe shoes. Groom well. Impress!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
