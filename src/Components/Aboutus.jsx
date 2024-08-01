// src/components/About.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h1 className="text-center mb-4">About Us</h1>
              <p className="lead">
                Welcome to <strong>ChainTech Network</strong>, one of India's pioneering companies leading the blockchain revolution. What sets us apart is our unwavering commitment to harnessing the full potential of blockchain technology.
              </p>
              <p className="lead">
                At ChainTech Network, we are a collective of relentless innovators, dreamers, and doers, united by the shared vision of a better tomorrow. Our ecosystem is a playground of innovation, where cutting-edge product development, visionary recruitment solutions, and empowering venture capital services converge to shape the future.
              </p>
              <h2 className="h4 mt-4">Our Mission</h2>
              <p className="lead">
                To lead the blockchain revolution with innovative solutions that drive change and create value.
              </p>
              <h2 className="h4 mt-4">Our Vision</h2>
              <p className="lead">
                To build a future where blockchain technology transforms industries, improves lives, and fosters sustainable growth.
              </p>
              <h2 className="h4 mt-4">What We Do</h2>
              <ul className="lead">
                <li>Cutting-edge Product Development: We develop innovative blockchain products that solve real-world problems and push the boundaries of technology.</li>
                <li>Visionary Recruitment Solutions: We provide forward-thinking recruitment solutions, connecting top talent with opportunities to innovate and grow.</li>
                <li>Empowering Venture Capital Services: We offer venture capital services that empower startups and entrepreneurs to turn their visionary ideas into reality.</li>
              </ul>
              <p className="lead">
                We don't just talk about change; we make it happen. If you're a forward-thinker, a trailblazer, and a believer in the transformative power of blockchain, ChainTech Network is the place for you. Join us, and together, let's pioneer a new era of possibilities, where your internship becomes a launchpad for your career and your passion fuels the blockchain revolution.
              </p>
              <h2 className="h4 mt-4">Join Us</h2>
              <p className="lead">
                At ChainTech Network, we are always on the lookout for passionate individuals who are ready to make a difference. Whether you are an intern looking to kickstart your career or a professional aiming to contribute to the blockchain revolution, we have a place for you.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
