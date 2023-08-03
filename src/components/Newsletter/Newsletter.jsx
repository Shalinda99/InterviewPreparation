import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import RegistrationForm from "./RegistrationForm";

const Newsletter = () => {
  const [showForm, setShowForm] = useState(false);

  const handleMockInterviewsClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Mock interviews are the key to unlocking your true interview prowess!</h2>
            
            <button className="btn" onClick={handleMockInterviewsClick}>
              Get Mock Interviews
            </button>
            {showForm && <RegistrationForm onClose={handleCloseForm} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
