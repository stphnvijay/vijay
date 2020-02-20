import React,{Component} from 'react'

import "bootstrap/dist/css/bootstrap.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import Axios from "axios";

class UpdateCand extends React.Component {
  localCandidate = {
    id: "",
    adhaarId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    alternateNumber: "",
    emailId: "",
    tex: "",
    rex: "",
    primarySkills: "",
    secondarySkills: "",
    qualification: "",
    additionalEducation: "",
    expectedCtc: "",
    currentCtc: "",
    positionApplied: "",
    gender: "",
    dob: "",
    address: ""
  };
  constructor() {
    super();
    this.state = {
      candidate: this.localCandidate
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    let candidate = { ...this.state.candidate };
    candidate[name] = value;
    this.setState({ candidate });
  };

  handleSubmit = e => {
    e.preventDefault();

    let candidate = this.state.candidate;

    console.log(candidate);

    Axios.post("http://localhost:8085/candidate", candidate).then(e =>
      console.log("posted")
    );
    //console.log(this.state);
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center py-4">Add Candidate</p>
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Id:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="id"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                AdhaarId:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="adhaarId"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                FirstName:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="firstName"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                LastName:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="lastName"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                PhoneNumber:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="phoneNumber"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                AlternateNumber:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="alternateNumber"
                onChange={this.handleChange}
              />
              <br />
              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                Your email:
              </label>
              <input
                type="email"
                id="defaultFormCardEmailEx"
                className="form-control"
                name="emailId"
              />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Total Experience:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="tex"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Relavent Experience:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="rex"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Primary Skills:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="primarySkills"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Secondary Skills:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="secondarySkills"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Qualification:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="qualification"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Additional Education:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="additionalEducation"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Expected Ctc:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="expectedCtc"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Current Ctc:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="currentCtc"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                PositionApplied:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="positionApplied"
              />
              <br />
              <label>
                Gender: Male{" "}
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.handleChange}
                />
              </label>
              Female{" "}
              <input
                name="gender"
                type="radio"
                value="Female"
                onChange={this.handleChange}
              />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Dob:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="dob"
              />
              <br />
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Address:
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="address"
              />
              <br />
              <div className="text-center py-4 mt-3">
                <MDBBtn className="btn btn-outline-purple" type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default UpdateCand;