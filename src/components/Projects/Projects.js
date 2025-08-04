import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your own project images (replace placeholders with real images if available)
import buyMeATea from "../../Assets/Projects/buy.png";
import spotifyClone from "../../Assets/Projects/spotify.png";
import taskMaster from "../../Assets/Projects/task.png";
import xClone from "../../Assets/Projects/x.png";
import snakeGame from "../../Assets/Projects/snake.png";
import frissonAI from "../../Assets/Projects/frisson.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Frisson AI Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frissonAI}
              isBlog={false}
              title="Frisson AI Website"
              description="Currently developing a new AI-specific company website using Next.js and TypeScript (TSX) with a focus on performance, scalability, and modern UI/UX."
              demoLink="https://frisson-ai.vercel.app/"
            />
          </Col>

          {/* Buy Me a Tea */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buyMeATea}
              isBlog={false}
              title="Buy Me a Tea"
              description="A platform for creators to receive donations from their community. Built with Next.js, NextAuth, MongoDB, Razorpay API, and Tailwind CSS. Features secure authentication and real-time payment processing."
              ghLink="https://github.com/prateek980ti/buy-me-a-tea"
              // demoLink="https://buy-me-a-tea-demo.vercel.app/"
            />
          </Col>

          {/* Spotify Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyClone}
              isBlog={false}
              title="Spotify Clone"
              description="A full-stack music streaming web app emulating Spotify with HTML, CSS, and JavaScript. Offers responsive design, playlist management, and seamless navigation for an engaging experience."
              ghLink="https://github.com/prateek980ti/Spotify_Clone"
              // demoLink="https://spotify-clone-demo.vercel.app/"
            />
          </Col>

          {/* Task Master */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskMaster}
              isBlog={false}
              title="Task Master"
              description="A task management app built with React and Next.js. Supports adding/removing tasks with real-time updates, boosting productivity with a minimalistic UI and fast server-side rendering."
              ghLink="https://github.com/prateek980ti/TaskMaster"
              demoLink="https://task-master-taupe.vercel.app/"
            />
          </Col>

          {/* X-Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xClone}
              isBlog={false}
              title="X‑Clone"
              description="A modern Twitter (X) clone built with Tailwind CSS, providing a sleek responsive UI. Designed to mimic key social media interactions like posting, feeds, and smooth layouts for practice in front-end styling and component design."
              ghLink="https://github.com/prateek980ti/X-Clone"
              demoLink="https://x-clone-navy.vercel.app/"
            />
          </Col>

          {/* Snake Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              isBlog={false}
              title="Snake Game"
              description="This is a simple yet fun Snake Game built using React and JavaScript. The game features smooth animations, keyboard controls, and a scoring system. Enjoy playing and improving your high score! 🚀"
              ghLink="https://github.com/prateek980ti/Snake-Game"
              demoLink="https://snake-game-phi-swart.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
