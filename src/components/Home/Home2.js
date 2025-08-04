import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prateek.JPG";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Since I was a kid, I’ve been passionate about computers, and that curiosity is what first got me into programming. 🤷‍♂️
              <br />
              <br />
              I started exploring how software works and eventually became fluent in
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              My primary interests lie in building modern&nbsp;
              <i>
                <b className="purple">Web Technologies and Full‑Stack Products</b>
              </i>
              &nbsp; using
              <b className="purple"> React.js, Next.js, Node.js, </b>
              and <b className="purple">Express.js</b>.
              <br />
              <br />
              I also enjoy creating <b className="purple">database‑driven solutions</b> with
              <i>
                <b className="purple"> MongoDB </b>
              </i>
              and
              <i>
                <b className="purple"> MYSQL</b>
              </i>
              , focusing on secure and user‑friendly applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar " />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prateek980ti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prateek-dawalia-980ti/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
