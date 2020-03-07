import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import API from "./utils/API";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import QuestionInput from "./pages/QuestionInput"
import ClientInput from "./pages/ClientInput"
import Assessment from "./pages/Assessment"
import Clients from "./pages/Clients"
import Results from "./pages/Results";
import ClientResults from "./pages/ClientResults"
import Confirmation from "./pages/Confirmation"
import "./index.css"
import AOS from 'aos'


class App extends Component {
  state = {
    authorized: false,
    client: {},
    results: [],
    clientResults: []
  };

  componentDidMount() {
    this.isAuthorized();
    AOS.init()
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        this.setState({
          authorized: res.data.message ? false : true
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log("logged out");
        this.isAuthorized();
      })
      .catch(err => {
        console.log(err);
      });
  };

  setClient = client => {
    this.setState({ client: client })
  }

  setResults = results => {
    this.setState({ results: results })
  }

  setClientResults = results => {
    this.setState({ clientResults: results })
  }

  render() {
    return (
      <Router>
        <div className="mainApp">
          {/* <Switch>
            <Route exact path="/">
              {this.state.authorized ? (
                <Home logout={this.logout} />
              ) : (
                  <Redirect to="/login" />
                )}
            </Route>
            <Route exact path="/login">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                  <Login isAuthorized={this.isAuthorized} />
                )}
            </Route>
            <Route exact path="/register">
              {this.state.authorized ? (
                <Redirect to="/" />
              ) : (
                  <Register isAuthorized={this.isAuthorized} />
                )}
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch> */}

          <Route exact path="/">
            <Home logout={this.logout} />
          </Route>
          <Route exact path="/clientinput">
            <ClientInput setClient={this.setClient} client={this.state.client} />
          </Route>
          <Route exact path="/clients">
            <Clients setClientResults={this.setClientResults} />
          </Route>
          <Route exact path="/assessment">
            <Assessment setResults={this.setResults} clientID={this.state.client.id} />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
          <Route exact path="/clientresults">
            <ClientResults clientResults={this.state.clientResults} />
          </Route>


          {/* <Route exact path="/results">
            <Results results={this.state.results} />
          </Route> */}


          {/* <Route exact path="/">
            <QuestionInput inputQuestion={this.inputQuestion}></QuestionInput>
          </Route> */}

        </div>
      </Router>

    );
  }
}

export default App;
