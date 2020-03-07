import React from "react";
import { FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import "./home.css"

function Home({ logout }) {
  return (
    <div>
      <Header />
      <Row>
        <Col size="md-12">
          <Jumbotron data-aos="zoom-in">
            <h1>Welcome!</h1>
            <hr></hr>
            <ul className="homeUL text-left">
              <li>To begin a new assessment, click "New Assessment"</li>
              <li>To view a list of clients who have completed assessments, click "View Clients"</li>
            </ul>
            <hr></hr>
            <Row>
              <Col size="sm-3"></Col>
              <Col size="sm-3">
                <Link to="/clientinput">
                  <button type="button" className="btn btn-outline-success homeBtn">New Assessment</button>
                </Link>
              </Col>
              <Col size="sm-3">
                <Link to="/clients">
                  <button type="button" className="btn btn-outline-success homeBtn" >View Clients</button>
                </Link>
              </Col>
              <Col size="sm-3"></Col>

            </Row>
            <FormBtn
              text="Logout"
              onClick={logout}
              classes="btn-outline-success logoutBtn homeBtn"
            />
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
