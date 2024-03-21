import React from "react";
import {Outlet} from 'react-router-dom';
import './menu.css';
import './../style.css';
import { Container, Row, Col } from "react-bootstrap";
import homePic from "../images/Logo.png";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";

export default function Menu() {
  return (
    <Container fluid className="home-section" id="home">
      <Outlet />
          <Row>
          <Col md={4} className="home-header">
          <h1 style={{ paddingBottom: 100 }} className="heading">
            Welcome to </h1>
            <Typewriter
              options={{
              strings: "World of Books",
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
          </Col>
          <Col md={8} className="myHome">
            <Tilt>
              <img src={homePic} alt="myHome" className="img-fluid" style={{ paddingTop: "0px"}}/>
            </Tilt>
            </Col>
          </Row>
      </Container>
  );
}
