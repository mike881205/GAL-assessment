import React from "react";
import { FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Home({ logout }) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Welcome!</h1>
            <Row>
              <Col size="sm-3"></Col>
              <Col size="sm-3">
                <button type="button" className="btn btn-outline-primary">New Assessment</button>
              </Col>
              <Col size="sm-3">
                <button type="button" className="btn btn-outline-primary">View Clients</button>
              </Col>
              <Col size="sm-3"></Col>

            </Row>
            <FormBtn
              text="Logout"
              onClick={logout}
              classes="btn-primary logoutBtn"
            />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
