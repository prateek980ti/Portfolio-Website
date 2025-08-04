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
              Engineered full-stack applications using React.js, Node.js, Express.js, and MongoDB, improving overall performance and UI responsiveness. Designed and deployed a secure JWT and bcrypt-based authentication system handling 100+ user sessions, while developing and maintaining 10+ RESTful APIs to ensure seamless frontend-backend integration and faster data fetching. Additionally, optimized MongoDB schemas and queries, reducing data retrieval time and enhancing performance under high-load scenarios.
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Experience;
