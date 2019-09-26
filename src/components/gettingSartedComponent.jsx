import React, { Component } from "react";

import CarImage from "../img/autoImg/icon_your_car.png";
import DealerImage from "../img/autoImg/icon_your_dealer.png";
import LoanImage from "../img/autoImg/icon_your_loan.png";

export default class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioButton: {
        coAppRadioButtonValue: "",
        customerExistRadioButtonValue: ""
      },
      errors: {},
      error: false,
      info: null
    };
  }
  componentDidCatch(error, info) {
    // Something unexpected expection happened to the component load.
    // Add error to state
    this.setState({
      error: error,
      info: info
    });
  }
  handleOptionChange = changeEvent => {
    // change of the Radiobutton value.
    let radioButtonCopy = JSON.parse(JSON.stringify(this.state.radioButton));
    // Radiobutton event triggered on selecting
    if (changeEvent.target.name === "coApplicant") {
      radioButtonCopy.coAppRadioButtonValue = changeEvent.target.value;
      this.setState({
        radioButton: radioButtonCopy
      });
    } else {
      radioButtonCopy.customerExistRadioButtonValue = changeEvent.target.value;
      this.setState({
        radioButton: radioButtonCopy
      });
    }
  };
  validate = () => {
    const errors = {};
    // validation throws for coapplicant radio  button selction is required.
    const { radioButton } = this.state;
    if (radioButton.coAppRadioButtonValue === "") {
      errors.coApplicant = "Please select coAppliacant option";
    }
    // validation error throws for existing user radio  button selction is required.
    if (radioButton.customerExistRadioButtonValue === "") {
      errors.existingUser = "Please select existing customer optiomn";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return; // If radio button error triggers stop the flow
    this.setState({
      isUserLoggedIn: !this.state.isUserLoggedIn
    });
    this.props.history.push("/user"); // Redirect to user details page
  };
  render() {
    const { radioButton, errors, error, info } = this.state;

    if (error) {
      const unExpectedError = (
        <div>
          <h5>Sorry. Getting started page is not loading!</h5>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {info.componentStack}
          </details>
        </div>
      );
      // Some unhandled exception error was thrown. Let's display message to the user
      return unExpectedError;
    } else {
      const gettingStartedDisplay = (
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <h2>Getting started</h2>
            <p>Good afternoon. Ready to buy a car?</p>
            <div className="">
              <span className="col-lg-4">
                <img src={CarImage} alt="" />
              </span>
              <span className="col-lg-4">
                <img src={DealerImage} alt="" />
              </span>
              <span className="col-lg-4">
                <img src={LoanImage} alt="" />
              </span>
            </div>
            <div className="col-xs-12">
              <label>Do you want to apply with a co-applicant</label>
              <div>
                <span className="">
                  <input
                    type="radio"
                    name="coApplicant"
                    value="yes"
                    checked={radioButton.coAppRadioButtonValue === "yes"}
                    onChange={this.handleOptionChange}
                  />
                  Yes
                </span>
                <span className="col-lg-3">
                  <input
                    type="radio"
                    name="coApplicant"
                    value="no"
                    checked={radioButton.coAppRadioButtonValue === "no"}
                    onChange={this.handleOptionChange}
                  />
                  No
                </span>
                {errors.coApplicant && (
                  <div className="alert alert-danger">{errors.coApplicant}</div>
                )}
              </div>
            </div>
            <div>
              <label>Are you an existing Chase customer?</label>
              <div>
                <span>
                  <input
                    type="radio"
                    name="existingUser"
                    value="yes"
                    checked={
                      radioButton.customerExistRadioButtonValue === "yes"
                    }
                    onChange={this.handleOptionChange}
                  />
                  Yes
                </span>
                <span className="col-lg-3">
                  <input
                    type="radio"
                    name="existingUser"
                    value="no"
                    checked={radioButton.customerExistRadioButtonValue === "no"}
                    onChange={this.handleOptionChange}
                  />
                  No
                </span>
                {errors.existingUser && (
                  <div className="alert alert-danger">
                    {errors.existingUser}
                  </div>
                )}
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary float-right"
                onClick={this.handleFormSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
      return gettingStartedDisplay;
    }
  }
}
