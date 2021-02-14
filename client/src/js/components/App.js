import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../../App.css";
import Navi from "./Navi";
import Footer from "./Footer";
import Main from "./Main.js";

import Auth from "./modules/Auth";
import ScrollToTop from "./ScrollToTop";
//import LandingPage from './LandingPage';
import DemoPageContainer from "./DemoPageContainer";
import LoginPageContainer from "./LoginPageContainer";
import RegistrationPageContainer from "./RegistrationPageContainer";
import ProfilePageContainer from "./ProfilePageContainer";
import ProjectPageContainer from "./ProjectPageContainer";

export class App extends Component {
  render() {
    return (
      <div className="h-100">
        <BrowserRouter>
          <Navi />
          <ScrollToTop>
            <Switch>
              <div className="App">
                <Route exact path="/" render={() => <Main />} />

                <Route
                  path="/demo"
                  render={() =>
                    // eslint-disable-line
                    !Auth.isUserAuthenticated() ? (
                      <DemoPageContainer />
                    ) : (
                      <Redirect to="/profile" />
                    )
                  }
                />

                <Route
                  path="/register"
                  render={() =>
                    // eslint-disable-line
                    !Auth.isUserAuthenticated() ? (
                      <RegistrationPageContainer />
                    ) : (
                      <Redirect to="/profile" />
                    )
                  }
                />
                <Route
                  path="/login"
                  render={() =>
                    // eslint-disable-line
                    !Auth.isUserAuthenticated() ? (
                      <LoginPageContainer />
                    ) : (
                      <Redirect to="/profile" />
                    )
                  }
                />
                <Route
                  exact
                  path="/profile"
                  render={() =>
                    // eslint-disable-line
                    Auth.isUserAuthenticated() ? (
                      <ProfilePageContainer />
                    ) : (
                      <Redirect to="/login" />
                    )
                  }
                />

                <Route
                  path="/projects/:projectID"
                  render={(
                    props // eslint-disable-line
                  ) =>
                    Auth.isUserAuthenticated() ? (
                      <ProjectPageContainer {...props} />
                    ) : (
                      <Redirect to="/login" />
                    )
                  }
                />
              </div>
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
