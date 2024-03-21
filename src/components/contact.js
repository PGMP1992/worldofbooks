import React from "react";
import Menu from "./menu";
import { Container, Row, Col } from "react-bootstrap";


import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function contact() {
    return (
    <section>
    <Menu />
    <Container fluid className="home-about-section" id="about">
    
    <Col md={12} className="home-about-social">

    <h2>We are available in various Social media plateform</h2>

    <p>
    Feel free to <b className="purple">Connect </b>with us
    </p>
    <ul className="home-about-social-links">
    <li className="social-icons">
    <a
    href="https://github.com/Shailja26code"
    target="_blank"
    rel="noreferrer"
    className="icon-colour  home-social-icons"
    >
    <AiFillGithub />
    </a>
    </li>
    <li className="social-icons">
    <a
    href="https://twitter.com/"
    target="_blank"
    rel="noreferrer"
    className="icon-colour  home-social-icons"
    >
    <AiOutlineTwitter />
    </a>
    </li>
    <li className="social-icons">
    <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    className="icon-colour  home-social-icons"
    >
    <AiFillFacebook />
    </a>
    </li>
    <li className="social-icons">
    <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
    >
    <AiFillInstagram />
    </a>
    </li>
    </ul>
    </Col>
    
    </Container>
    </section>
    )
}
export default contact;