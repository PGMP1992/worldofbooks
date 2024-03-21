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
<<<<<<< HEAD
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
=======
    <>
        <nav>
            <ul>
                <li>
                   <Link to="/">
                        Home
                   </Link>
                </li>
                <li>
                   <Link to="/books">
                        Books
                   </Link>
                </li>
                
            </ul>
        </nav>
        <Outlet />
    </>
>>>>>>> 50a35a57fee4ac7a3bbbdd8048b02a0293fa9c94
  );
}
