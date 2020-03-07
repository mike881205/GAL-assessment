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
      <row className="d-flex justify-content-center GALimg">
        <img src="https://www.goldenageliving.com/wp-content/uploads/2017/11/Goldenageliving-logo-web.jpg" alt="mainImg"></img>
      </row>
      <Row>
        <Col size="md-12">
          <Jumbotron data-aos="zoom-in">
            <h1>Welcome!</h1>
            <Row>
              <Col size="sm-3"></Col>
              <Col size="sm-3">
                <Link to="/clientinput">
                  <button type="button" className="btn btn-outline-success">New Assessment</button>
                </Link>
              </Col>
              <Col size="sm-3">
                <Link to="/clients">
                  <button type="button" className="btn btn-outline-success" >View Clients</button>
                </Link>
              </Col>
              <Col size="sm-3"></Col>

            </Row>
            <FormBtn
              text="Logout"
              onClick={logout}
              classes="btn-success logoutBtn"
            />
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
