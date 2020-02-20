import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import QuestionInput from "./pages/QuestionInput"
import API from "./utils/API";

class App extends Component {
  state = {
    authorized: false
  };

  componentDidMount() {
    this.isAuthorized();
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

  render() {
    return (
      <Router>
        <div>
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
          <Route exact path="/inputquestion">
            <QuestionInput inputQuestion={this.inputQuestion}></QuestionInput>
          </Route>
        </div>
      </Router>

    );
  }
}

export default App;
