import React, { Component } from "react";
//import axios from "axios";

export default class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      address: {},
      contact: {}
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

  componentDidMount() {
    //const {data : users} = axios.get("https://jsonplaceholder.typicode.com/posts/1");
    // Update the Existing user information.
    this.setState({
      user: {
        name: "jackson",
        email: "jackson@gmail.com"
      },
      address: {
        streetAddress: "1000 polaris prkway",
        city: "columbus",
        state: "ohio",
        zipcode: "43240"
      },
      contact: {
        phoneNumber: "(614-786-9048"
      }
    });
  }
  goBack = () => {
    this.props.history.push("/");
  };
  render() {
    const { user, address, contact, error, info } = this.state;
    if (error) {
      return (
        <div>
          <h5>Sorry. PersonalInformation page is not loading!</h5>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {info.componentStack}
          </details>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-lg-8">
            <h2>Personal Information</h2>
            <div className="row">
              <div className="col-lg-12">
                <div className="col-md-3 col-md-offset-3 col-sm-4 col-sm-offset-1 float-left">
                  <label>User Name</label>
                </div>
                <div className="col-md-6 col-sm-7 float-left">
                  <span>{user.name}</span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-md-3 col-md-offset-3 col-sm-4 col-sm-offset-1 float-left">
                  <label>Eamil Id</label>
                </div>
                <div className="col-md-6 col-sm-7 float-left">
                  <span>{user.email}</span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-md-3 col-md-offset-3 col-sm-4 col-sm-offset-1 float-left">
                  <label>Address</label>
                </div>
                <div className="col-md-6 col-sm-7 float-left">
                  <span>
                    {address.streetAddress}
                    <br />
                    {address.city}
                    <br />
                    {address.state}
                    <br />
                    {address.zipcode}
                  </span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="col-md-3 col-md-offset-3 col-sm-4 col-sm-offset-1 float-left">
                  <label>Phone Number</label>
                </div>
                <div className="col-md-6 col-sm-7 float-left">
                  <span>{contact.phoneNumber}</span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-lg-6 col-sm-push-2 col-lg-push-3 text-right">
                <button className="btn btn-info" onClick={this.goBack}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
