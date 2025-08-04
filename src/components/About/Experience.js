import React from "react";
import { Col, Row, Card } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Software Developer */}
      <Col md={8} className="mb-4">
        <Card className="experience-card">
          <Card.Body>
            <h5 style={{ color: "white" }}>
              <span className="purple">Software Developer</span> @ Frisson Devhub
            </h5>
            <small className="text-muted">Jun 2025 – Present</small>
            <p className="mt-3">
              Developing and maintaining websites from scratch using the MERN stack.  
              Designing and integrating RESTful APIs for seamless front‑end and back‑end communication.  
              Optimizing database queries, handling deployments, and ensuring secure, scalable applications.
            </p>
          </Card.Body>
        </Card>
      </Col>

      {/* Intern */}
      <Col md={8} className="mb-4">
        <Card className="experience-card">
          <Card.Body>
            <h5 style={{ color: "white" }}>
              <span className="purple">Full‑Stack Developer Intern</span> @ Frisson Devhub
            </h5>
            <small className="text-muted">Feb 2025 – May 2025</small>
            <p className="mt-3">
              Built full‑stack applications with React.js, Node.js, Express.js, and MongoDB.  
              Created and maintained RESTful APIs, reducing data latency by 30%.  
              Implemented secure authentication with JWT and bcrypt while optimizing database performance.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Experience;
