import React, { Component } from "react";
import "./App.css";
import ChaseLogo from "./img/logo/octagon-white.png";
import { Route } from "react-router-dom";
import GettingStarted from "./components/gettingSartedComponent";
import PersonalInformation from "./components/personalInformation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLoggedIn: false
    };
  }
  render() {
    // Render header logo & container for the project.
    // Implemented route method
    return (
      <div>
        <header style={{ background: "blue" }}>
          <img
            src={ChaseLogo}
            alt=""
            width="35px"
            className="rounded mx-auto d-block"
          />
        </header>
        <main className="container">
          <Route path="/" exact component={GettingStarted} />
          <Route
            path="/user"
            render={props => (
              <PersonalInformation isUserLoggedIn="true" {...props} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
